// this file is specially for the rendering the data in express
const express = require('express');
const app = express();
const users = require('./data.json'); 
app.get('/users', (req, res) => {
    res.json(users);
});
app.listen(8000, () => {
    console.log("Server running on port 8000");
});

