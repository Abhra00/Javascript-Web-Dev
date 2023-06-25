
/*
### File Processing with Callback:
- Write a function 'readFileCallback' that takes a filename and a callback function. 'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.

*/

const fs = require('fs');
const path = require('path');

function callback(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

function readFileCallback(fileName, callback){
    const filePath = path.join(__dirname, fileName);
    fs.readFile(filePath, 'utf-8', callback);
}


readFileCallback('/a.txt', callback);
