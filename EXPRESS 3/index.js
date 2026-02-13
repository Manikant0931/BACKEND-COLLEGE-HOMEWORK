const express = require('express');
const app = express();
const path = require('path');
const x = path.join(__dirname, 'components 2');
app.use(express.static(x));

// create independent get....

// app.get('/',(req,res)=>{
//   res.send("hello from the main page"); //
//  }) 

// app.get('/home',(req,res)=>{
 // res.send("hello from the home page"); 
 // })

 // app.get('/about',(req,res)=>{
 // res.send("hello from the about page"); 
 // })
app.get('/html', (req, res) => {
    res.sendFile(path.join(x, 'index.html'));
});

app.get('/name', (req, res) => {
    res.sendFile(path.join(x, 'name.html'));
});

app.get('/search', (req, res) => {
    if (!req.query.name || !req.query.age) {
        res.send("no search results");
    } else {
        res.send("search results found " + req.query.name + " " + req.query.age);
    }
});

app.listen(5000, () => {
    console.log('server is running on port http://localhost:5000');
});
