//url concept:-
// const url=require("url");
// const myUrl1="http://www.localhost.3000/login.html?id=100&status=active";
// const myUrl=url.parse(myUrl1,true);
// console.log(myUrl);


//import http,fs,url
// const http = require("http");
// const fs = require("fs");
// const url = require("url");
//1.
//callback to http server and then listen if error then print error else print success
// const server = http.createServer((req, res) => {
//     const parsedUrl = url.parse(req.url, true);
// })
// server.listen(3000, (err) => {
//     if (err) {
//         console.log("Error starting server:", err);
//     } else {
//         console.log("Server is running on port 3000");
//     }
// });


//follow up the url and see for the blank page


//2.
//  USING RES.WRITE

//import http,fs,url
const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(req.url);

    // current date and time:-
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    console.log("Request received at:", date, time);

    // append date and time to file
    fs.appendFile(
        "dateTimeLog.txt",
        `\nRequest received at: ${date} ${time}`,
        (err) => {
            if (err) {
                console.log("Error writing to file:", err);
            }
            res.write('<h1>Hello from Node.js Server</h1>');
            res.end();
        }
    );
});

server.listen(3000, (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Running without error at http://localhost:3000");
    }
});
