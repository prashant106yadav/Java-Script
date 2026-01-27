// function myName() {
//                                         // declaration of function    
// }
// myName                                 // reference 
// myName()                               // execution

// function sayMyname() {
//     console.log("Prasahnt");
//     console.log("Yadav");
// }
// sayMyname()                                // execution of function



// function addition(num1, num2) {                  // num1 $num2 are called parameters
//     console.log(num1 + num2);
// }
// addition(2, 3)                                   // 2 & 3 are called arguments



// function subtraction(num1, num2) {

//     console.log(num1 - num2);
// }
// const result = subtraction(5, 2)
// console.log("result: ", result);                      // wrong way to execute 


function subtraction(num1, num2) {

    let result = num1 - num2
    return result                                        // after return no code will be executable
}
// const result = subtraction(5, 2)
// console.log("result: ", result);                         // one way to execute



function subtraction(num1, num2) {

    return num1 - num2                                       // after return no code will be executable
}
// const result = subtraction(5, 2)
// console.log("result: ", result);                              // another way to execute



// function userLogin(username){
//     return ` ${username} has just logged in `
// }
// // console.log(userLogin("Prasahnt"));
// console.log(userLogin());                                  // if we do not give the argument then the value returned will be "undefined"


// function userLogin(username){
//     if(username === undefined){                              // if(!username)  we can also use this method 
//         console.log("please enter a username");              // to avoid undefined we use if to check condition 
//         return
//     }
//     return ` ${username} has just logged in `
// }
// console.log(userLogin());




// ***** to pass multiple values in function ****** //

function cartPrice(...num1) {                                     // rest operator( ... ): udes to pass multiple operator in function
    return num1                                                   // when we don't know the no. of argruments to be executed we use rest operator
}

// console.log(cartPrice(100, 200, 300, 400));


// ***** to pass object in function ***** //

// const user = {
//     userName: "pikachu",
//     price: 500
// }

// function handleObject(anyobject) {
//     console.log(` Username is ${anyobject.userName} and price is${anyobject.price} `);
// }
// handleObject(user)


// ***** to pass array in function *****//

const myarray = [100, 200, 300, 400]

function myArr(getArray) {
    return getArray[1]
}
console.log(myArr(myarray));

 