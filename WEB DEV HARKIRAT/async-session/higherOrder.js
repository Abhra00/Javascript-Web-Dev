
function callback() {
    console.log("I am in callback function");
}

function higherOrder(callback) {
    callback();
    console.log("Out of callback function and in the higherOredr function");
}

higherOrder(callback);