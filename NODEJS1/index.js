// require("./m1")
// require("./m2")


//by module wrapper function.
// what is inside module wrapper?
// function (exports, require, module, __filename, __dirname) {
//    Your code goes here
// });
// exports: This is an object that allows you to share parts of your code with other modules.
// require: This is how you can import other modules into your code.
// module: This is the whole module itself (a way to share code).
// __filename: This is the name of the file you’re working on.
// __dirname: This is the name of the folder (directory) your file is in.

// (function(){
//     let name="harry";
//     console.log(name);
// })();

// (function(){
//     let name="garry";
//     console.log(name);
// })();


// callback function
// function greet(callback) {
//   callback(); 
// }
// function sayBye() {
//   console.log("Goodbye!");
// }
// greet(sayBye);


// const crypto = require("crypto");
// const beforeExe = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("passwordkabc", "salt", 100000, 512, "sha512");
// console.log(Date.now() - beforeExe);

// const crypto = require("crypto");
// const { promisify } = require("util");

// const pbkdf2Async = promisify(crypto.pbkdf2);

// for(int i =0;i<100;i++){async function hashPassword() {
//     const beforeExe = Date.now();

//     await pbkdf2Async("password", "salt", 100000, 512, "sha512");

//     console.log(Date.now() - beforeExe);
// }}

// hashPassword();



const crypto = require("crypto");
const { promisify } = require("util");

const pbkdf2Async = promisify(crypto.pbkdf2);

async function runSequential() {
    for (let i = 1; i <= 5; i++) {
        const start = Date.now();
        await pbkdf2Async("password", "salt", 100000, 512, "sha512");
        console.log(`Run ${i}:`, Date.now() - start, "ms");
    }
}

runSequential();




