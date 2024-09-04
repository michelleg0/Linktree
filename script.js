// Function to simulate sending a message
function sendMessage() {
    // Get the message input value
    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    // Check if the input is not empty
    if (message) {
        // just show an alert with the message
        alert('Message sent: ' + message);

        // Clear the input
        messageInput.value = '';
    } else {
        // Show an alert if the input is empty
        alert('Please enter a message.');
    }
}
