function printToScreen() {
    console.log('hello world');
}

setTimeout(printToScreen, 3*1000);

let counter = 0;
for(let i = 0; i < 10000; i++) {
    counter++;
}

console.log(counter);