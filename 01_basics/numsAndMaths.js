// const score = 100
// console.log(score);

// const balance = new Number(200)         // another way of declaring number
// console.log(balance);

// console.log(balance.toString().length);           // changes the datatype from number to string 
// console.log(typeof balance);


// console.log(balance.toFixed(2));          // to get a precision value upto 2 decimal places

// let otherNumber = 123.89
// console.log(otherNumber.toPrecision(3));          // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// let num = 100000000
// console.log(num.toLocaleString());              // used to separate digits using comma (by default international standard)




// ********************************  Maths  ******************************

// console.log(Math);

// console.log(Math.abs(-5));                    // Returns the absolute value of a number (converts negative to positive)
// console.log(Math.round(5.6));                 // returns the round off number
// console.log(Math.ceil(5.1));                  // returns the lower value of round off number
// console.log(Math.floor(5.1));                 // returns the upper value of round off number
// console.log(Math.min(1,2,3,4,5));             // returns the smallest value from a set of numbers
// console.log(Math.max(1,2,3,4,5));  


console.log(Math.random());                      // Returns a pseudorandom number between 0 and 1.
console.log((Math.random()*10)+1); 
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min);           // formula to get a random value between max and min (range)


