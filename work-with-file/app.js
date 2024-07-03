const fs  = require("fs");

fs.readFile("./files/file.txt",(err, data) => {
    console.log(err);
    console.log(data);
});