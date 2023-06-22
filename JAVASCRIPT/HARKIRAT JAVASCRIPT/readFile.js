const { randomUUID } = require("crypto");
const fs = require("fs");
var files = fs.readdirSync("./HARKIRAT JAVASCRIPT/");
console.log(files);
var id = randomUUID();
console.log(id);