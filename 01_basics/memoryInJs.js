// Stack(primitive) & Heap(Non-Primitive)

// let myName = "Prashant"

// let anotherName = myName
// anotherName = "Yadav"

// console.log(myName);
// console.log(anotherName);

// Stack memory : uses a copy of original value and original value remains unchanged


let userOne = {
    email: "user1@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// Heap memory: takes the reference value, i.e. the updates or changes is done in original value
