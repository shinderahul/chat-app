// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('username'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');



btn.addEventListener('click', function() {
    addMassage({username: 'Rahul', message: 'hello world'});
})

// Function to add Message
function addMassage(message) {
    output.innerHTML +='<p><strong>' + message.username + ': </strong>' + message.message + '</p>';
}