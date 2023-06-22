function printFullSingleRow(n) {
    let str = '*';
    for(let i = 0; i < n; i++) {
        str += '*';
    }
    console.log(str);
}

function printStarsWithSpaces(n) {
    let str = '';
    for(let i = 0; i < n; i++) {
        if(i == 0) {
            str += '*';
        }

        if(i == n - 1) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    console.log(str);
}

function printFullThing(n){
    for(let i = 0; i < n; i++) {
        if(i == 0 || i == n - 1) {
            printFullSingleRow(n);
        } else {
            printStarsWithSpaces(n);
        }
    }
}

printFullThing(6);