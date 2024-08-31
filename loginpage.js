document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // Simple validation (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
        // Here you can redirect to another page or handle successful login
        // window.location.href = 'dashboard.html';
    } else {
        messageElement.textContent = 'Invalid username or password.';
    }
});
