var express = require('express')
var app =  express()

app.use(express.static('public'))

var message = [
    {username: 'Swanil', message: 'Hi'},
    {username: 'Chetan', message: 'Hello'}
]

app.get('/messages', (req, res) => {
    res.send(message)
})

var server = app.listen(3000, () => {
    console.log(`Server is listening on port ${server.address().port}`)
})