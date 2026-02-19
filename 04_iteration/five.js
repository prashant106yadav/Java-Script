// ** Filter Map **

const nums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = nums.filter( (num) => {
//      num > 3                                                   // if we have to define the output value "in scope" we have to use "return" keyword
// })


// const newNums = nums.filter( (num) =>  num > 3)                   we don't have to use the "return" keyword if we are not using scope to define the output value 


const newNums = nums.filter( (num) => {
    return num > 3
})

// console.log(newNums);



// example 

const books = [
    {
        title: "attack on titan", genre: "action", publish: 2008
    },
    {
        title: "one piece", genre: "adventure", publish: 1995
    },
    {
        title: "naruto", genre: "adventure", publish: 2005
    },
    {
        title: "bleach", genre: "action", publish: 2005
    },
]

let userBooks = books.filter( (read) => read.genre === "action")
// console.log(userBooks);

userBooks = books.filter( (read) => {
    return read.publish >= 2005 && read.genre === "adventure"
})
// console.log(userBooks);




const number = [1, 2, 3, 4, 5]

const newN = number.map( (newNumber) => {
    return newNumber + 10                                    // adds 10 to each number in the array
})
console.log(newN);
