const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/content', (req, res) => {
    res.sendFile(path.join(__dirname, 'content.json'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/details.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/details.html'));
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
