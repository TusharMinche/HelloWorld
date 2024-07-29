
const API_URL = 'http://localhost:3000';

function login() {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('chatContainer').style.display = 'block';
                document.getElementById('userGreeting').textContent = username;
                loadMessages();
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function loadMessages() {
    fetch(`${API_URL}/messages`)
        .then(response => response.json())
        .then(data => {
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML = data.messages.map(msg => `<p>${msg}</p>`).join('');
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        })
        .catch(error => console.error('Error:', error));
}

function sendMessage() {
    const username = localStorage.getItem('username');
    const message = document.getElementById('messageInput').value;
    if (username && message) {
        fetch(`${API_URL}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('messageInput').value = '';
                loadMessages();
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

window.onload = function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('chatContainer').style.display = 'block';
        document.getElementById('userGreeting').textContent = username;
        loadMessages();
    }
};