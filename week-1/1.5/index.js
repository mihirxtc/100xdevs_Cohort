const fs = require("fs");

fs.readFile("file.txt", "utf-8", (e, d) => {
    console.log(d);
});
