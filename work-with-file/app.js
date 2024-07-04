const fs  = require("fs/promises");

// fs.readFile("./files/file.txt",(err, data) => {
//     console.log(err);
//     console.log(data);
// });

const fileOperation = async({filePath, action, data}) => {
    switch(action){
        case "read":

            // const data = await fs.readFile(filePath);
            // const text = data.toString();
            // console.log(text);

            // Декодуємо текст  
            const text = await fs.readFile(filePath, "utf-8");
            console.log(text);
            break;    

        case "add":
            await fs.appendFile(filePath, data);
            break;  
        case "replace":
            const result = await fs.writeFile(filePath, data);
            console.log(result);
            break;
                   
    }
}

// fileOperation({filePath: "./files/file.txt", action: "read"})
// fileOperation({filePath: "./files/file.txt", action: "add", data: "\ntest append file"});
fileOperation({filePath: "./files/file.txt", action: "replace", data: "test replece file"});
