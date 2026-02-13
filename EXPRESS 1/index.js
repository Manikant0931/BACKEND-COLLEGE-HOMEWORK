const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to the Home Page!");
    }

    else if (req.url === '/about') {

        // correct absolute path to about.html
        const filePath = path.join(__dirname, 'COMPONENTS', 'about.html');

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Error loading About page");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else if (req.url === '/profile') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("This is the Profile Page.");
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Page Not Found");
    }
});

server.listen(7000, () => {
    console.log("Server is running on http://localhost:7000");
});
