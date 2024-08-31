
const chatBtn = document.getElementById('chatBtn');
const chatbox = document.getElementById('Chatbox');
const closeBtn = document.getElementById('closeBtn');

// Show the chatbox when the button is clicked
chatBtn.addEventListener('click', () => {
    chatbox.style.display = 'block';
});

// Hide the chatbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    chatbox.style.display = 'none';
});

// Hide the chatbox if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == chatbox) {
        chatbox.style.display = 'none';
    }
});
