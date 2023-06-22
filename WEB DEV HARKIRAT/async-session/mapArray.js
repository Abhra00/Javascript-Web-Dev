/*
### Asynchronous Callback:
- Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).
*/
function higherOrderAsync(arr, callback) {
  const newArray = arr.map(callback);
  return newArray;
}

function mapUtilizer(num) {
  return num * 2;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resArray = higherOrderAsync(arr, mapUtilizer);
console.log(resArray);