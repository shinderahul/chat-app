

// Query DOM
var textmessage = document.getElementById('message'),
      username = document.getElementById('username'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');



btn.addEventListener('click', function() {
    var message = {username: username.value, message: textmessage.value}
    postMessages(message)
})

getMessages()

// Function to add Message
function addMassages(message) {
    output.innerHTML +='<p><strong>' + message.username + ': </strong>' + message.message + '</p>';
}

function getMessages() {
    axios.get('http://localhost:3000/messages')
    .then(function(response) {
        response.data.forEach(addMassages)
    })
}

function postMessages(message) {
    console.log(message)
    axios({
        method: 'post',
        url: 'http://localhost:3000/messages',
        data: message
    });
}
