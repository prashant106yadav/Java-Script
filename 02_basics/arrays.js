// const arr = [0, 1, 2, 3, 4, 5]
// const animals = ["dog", "cat", "lion", "tiger", "elephant"]

// console.log(arr[1]);
// console.log(animals[2]);

// const Arr = new Array(1, 2, 3)                          // another way of declaring array
// console.log(Arr);


// Arrays Methods

const arr = [0, 1, 2, 3, 4, 5]
// arr.push(6,7)                                        // push: Appends new elements to the end of an array, and returns the new length of the array.
// arr.pop()                                            // pop: Removes the last element from an array and returns it

// arr.unshift(6)                                       // unshift: Inserts new elements at the start of an array, and returns the new length of the array.
// arr.shift()                                         // shift: Removes the first element from an array and returns it

// console.log(arr.includes(9));                          // includes: Determines whether an array includes a certain element, returning true or false(boolean type)
// console.log(arr.indexOf(5));

// const newarr = arr.join()                               // Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(arr);
// console.log(newarr);
// console.log(typeof(newarr));


// slice & splice

console.log("A",arr);

const newarr = arr.slice(1,3)
console.log(newarr);

const newarr2 = arr.splice(1,3)
console.log(newarr2);




