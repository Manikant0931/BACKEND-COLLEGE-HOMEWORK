//USING FLAG(w,r,a,.....)
const fs = require('fs');
const fh = fs.openSync("secfb","w");
// const fh = fs.openSync("secfb","r");
// const fh = fs.openSync("secfb","a");
console.log(fh);

fs.writeFileSync("secfb","This is section FB");
console.log(fs.readFileSync("secfb", "utf-8")); 


//USING MODE
// const fs = require('fs');

// fs.writeFileSync("secfb","This is section FB",{mode:0o777});
// console.log(fs.readFileSync("secfb", "utf-8"));

//APPEND
// fs.appendFileSync("secfb","\nAppending new data");
// console.log(fs.readFileSync("secfb", "utf-8"));

//RENAME
// fs.renameSync("secfb","FBSection.js");
// console.log(fs.readFileSync("FBSection.js", "utf-8"));


//DELETE
// fs.unlinkSync("FBSection.js");
// fs.unlinkSync("secfb");
// console.log(fs.readFileSync("secfb", "utf-8"));
// console.log(fs.readFileSync("FBSection.js", "utf-8"));
// console.log("File deleted successfully");
//cpSync
// fs.copyFileSync("secfb","FBSection.js");
// console.log(fs.readFileSync("FBSection.js", "utf-8"));
// console.log(fs.readFileSync("secfb", "utf-8"));
// console.log("File copied successfully");

