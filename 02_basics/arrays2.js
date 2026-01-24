const marvelHeroes = ["ironman", "spiderman", "thor"]
const dcHeroes = ["superman", "batman", "flash"]

// marvelHeroes.push(dcHeroes)                          // this creates an array within array (avoid it)

// const allHeroes = marvelHeroes.concat(dcHeroes)         // concat: Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(allHeroes);

// const allHeroes = [...marvelHeroes, ...dcHeroes]          // another way to concat two or more arrays (use this method)
// console.log(allHeroes);


// const arr1 = [1, 2, 3, [4, 5], 6, 7, [5, 6, [1, 6]]]
// const arr2 = arr1.flat(Infinity)                              // flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(arr2);


// console.log(Array.isArray("prashant"));                          // isArray: states whether it is array or nor not(boolean type)
// console.log(Array.from("Prashant"));                            // from: Creates an array from an iterable object.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));                       // Returns a new array from a set of elements.

