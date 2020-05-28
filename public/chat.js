

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('username'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');



btn.addEventListener('click', function() {
    addMassages({username: 'Rahul', message: 'hello world'});
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