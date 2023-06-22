function fibonacci(endIndex) {
    let a = 0;
    let b = 1;
    console.log(a);
    for(let i = 2; i < endIndex; i++) {
        sum = a + b;
        console.log(sum);
        b = a;
        a = sum;
    }
}

fibonacci(25);

function starryPattern(row) {
    let str = "**";
    for(let i = 0; i <= row; i++) {
        for(let j = 1; j <= i; j++) {
            console.log(str);
            str += "**";
        }
    }
}
starryPattern(10);