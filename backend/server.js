const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint to serve QA.json
app.get('/api/questions', (req, res) => {
    const qaPath = path.join(__dirname, 'QA.json'); // Updated file name
    fs.readFile(qaPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load questions' });
        }
        res.json(JSON.parse(data));
    });
});

// Catch-all route to serve index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
