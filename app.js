const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set the port that you want the server to run on
const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});