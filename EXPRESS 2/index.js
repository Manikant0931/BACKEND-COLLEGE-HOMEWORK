const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("hello from dashboard page");
});
app.get('/about',(req,res)=>{
    res.send("hello from about page");
});
app.get('/home',(req,res)=>{
    res.send("hello from home page");
});
app.get('/contact',(req,res)=>{
    res.send(`
        <h1>hello from contact page</h1>
        <h2>this is h2 heading</h2>
    `);
});


app.get('/search',(req,res)=>{
    console.log(req.query);
    res.send("hello search results served "+ req.query.name + " " + req.query.age);
});

// app.get('/api/user', (req, res) => {
//     const user = {
//         name: "Mani Mishra",
//         age: 21,
//         course: "Full Stack + AI"
//     };
//     res.json(user);
// });

//localhost:8000/search?name=mani&age=21
app.use((req,res)=>{
    res.status(404).send("page not found");
});
console.log("server is running on port 8000 ");
app.listen(8000);

// express ke andar json ko kaise render karenge??
// 1.USING res.json() method
// =>Ye method automatically object ko JSON me convert karta hai + proper headers set karta hai.
// app.get('/api/user', (req, res) => {
//     const user = {
//         name: "Mani Mishra",
//         age: 21,
//         course: "Full Stack + AI"
//     };

//     res.json(user);
// });
// 2.USING res.send() method
// app.get('/api/data', (req, res) => {
//     res.send({
//         message: "Hello",
//         status: true
//     });
// });
// 3.Query ke sath JSON return karna
// Tera jo /search route hai usko JSON bana dete hain:
// app.get('/search', (req, res) => {
//     const { name, age } = req.query;
//     res.json({
//         message: "Search result",
//         userName: name,
//         userAge: age
//     });
// });

// NOTE:
// res.json() → JSON bhejne ke liye
// express.json() → JSON receive karne ke liye
// req.query → URL query data
// req.body → POST JSON data
// res.status(200).json() → Proper API response


