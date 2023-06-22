// ### Asynchronous Callback:
// - Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).
function higherOrderAsyncq(callback) {
    const day = new Date().getDate();
    console.log(day);
    setTimeout(callback, day * 1000);
}

function callback() {
    console.log('callback');
}

higherOrderAsyncq(callback);