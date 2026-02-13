const fs = require("fs");
for(let i=0;i<10;i++){
    // fs.openSync(`file${i}`,"w");
    fs.unlinkSync(`file${i}`);

}