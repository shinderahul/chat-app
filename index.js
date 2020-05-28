var express = require('express')
var bodyParser = require('body-parser')
var app =  express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var mongoose = require('mongoose');


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var dbUrl = 'mongodb://user:user123@ds029426.mlab.com:29426/node-chat'

var Massage = mongoose.model('Message', {
    username: String,
    message: String
})

var messages = [
    {username: 'Swanil', message: 'Hi'},
    {username: 'Chetan', message: 'Hello'}
]

app.get('/messages', (req, res) => {
    Massage.find({}, (err, messages) => {
        res.send(messages)
    })
})

app.post('/messages', (req, res) => {
    var message = new Massage(req.body)
    message.save(err => {
        if (err)
            sendStatus(500)

        io.emit('message', req.body)
        res.sendStatus(200)        
    })

})

io.on('connection', (socket) => {
    console.log('a use connected')
})

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    console.log('mongo db connection', err)
})

var server = http.listen(3000, () => {
    console.log(`Server is listening on port ${server.address().port}`)
})