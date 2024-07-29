// backend.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username } = req.body;
    if (username) {
        res.json({ success: true, message: 'Logged in successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Username is required' });
    }
});

app.get('/messages', (req, res) => {
    try {
        const data = fs.readFileSync('msg.txt', 'utf8');
        const messages = data.split('\n').filter(msg => msg.trim() !== '');
        res.json({ messages });
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).json({ error: 'Error reading messages' });
    }
});

app.post('/messages', (req, res) => {
    const { username, message } = req.body;
    if (username && message) {
        const formattedMsg = `${username}: ${message}\n`;
        fs.appendFile('msg.txt', formattedMsg, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                res.status(500).json({ error: 'Error saving message' });
            } else {
                res.json({ success: true, message: 'Message saved successfully' });
            }
        });
    } else {
        res.status(400).json({ error: 'Username and message are required' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});