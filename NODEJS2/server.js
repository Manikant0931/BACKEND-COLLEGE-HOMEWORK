const http = require("http");


// const server = http.createServer((req, res) => {
//   res.end("NAMASTE DUNIYA");
// });
// server.listen(3001,'localhost',(err)=>{
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log("hehe running on http://localhost:3001");
//     }
// });

const server = http.createServer((req, res) => {
    console.log(req);
  res.end("NAMASTE DUNIYA");
});
server.listen(3001,'localhost',(err)=>{
    if(err){
        console.log("Error", err);
    }else{
        console.log("hehe running on http://localhost:3001");
    }
});

// headers,URL,status code






// how to create a server that serves different content based on the url in node js
// how to create a server that serves static files in node js
// how to create a server that handles form submissions in node js
// how to create a server that uses routing in node js
// how to create a server that uses middleware in node js
// how to create a server that connects to a database in node js
// how to create a server that uses authentication in node js
// how to create a server that uses websockets in node js
// how to create a server that uses ssl in node js
// how to create a server that uses clustering in node js
// how to create a server that uses load balancing in node js
// how to create a server that uses caching in node js
// how to create a server that uses logging in node js
// how to create a server that uses error handling in node js
// how to create a server that uses environment variables in node js
// how to create a server that uses configuration files in node js
// how to create a server that uses testing in node js
// how to create a server that uses deployment in node js
// how to create a server that uses monitoring in node js
// how to create a server that uses performance optimization in node js