const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Endpoint to get content data
app.get('/api/content', (req, res) => {
    const contentData = require('./content.json');
    res.json(contentData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
