// ******** this keyword *********

// this only works in objects { it does not work on function }

// const user = {
//     username: "mikasa",
//     age: 20,

//     welcomeMessage: function() {
//         console.log(` ${this.username}, welcome to attack on titan `);                    // this: this refers to the "current context" in the scope
//     }
// }
// user.welcomeMessage()
// user.username = "eren"                                   // here the context( i.e. value ) is changed to "eren"
// user.welcomeMessage()


// const user = {
//     username: "mikasa",
//     age: 20,

//     welcomeMessage: function() {
//         console.log(` ${this.username}, welcome to attack on titan `); 
//         console.log(this);                                                        // this console log prints the current context ( block scope )
                          
//     }
// }
// user.welcomeMessage()
// user.username = "eren"                                 
// user.welcomeMessage()


const user = {
    username: "mikasa",
    age: 20,

    welcomeMessage: function() {
        console.log(` ${this.username}, welcome to attack on titan `);                                                      
                          
    }
}
// user.welcomeMessage()
// user.username = "eren"                                 
// user.welcomeMessage()

// console.log(this);                                                   // this console log prints the current context ( global scope context)



// this does not work on functions { output will be undefined }

// function hello(){
//     let username = "pikachu"
//     console.log(this.username);
// }
// hello()





// *************** Arrow function ***************

// const name = () => {                               // declaration of arrow function

// }


// const pokemon = (num1, num2) => {                                // explicit return: when we use curly braces we have to use the "return" keyword
//     return num1 + num2
// }
// console.log(pokemon(2, 3));


// const pokemon = (num1, num2) => ( num1 + num2 )                    // implicit return: when we use parnethesis we do not  have to use the "return" keyword
    
// console.log(pokemon(2, 3));



const pokemon = (num1, num2) => ( { userName: "unknown"} )             // method to use object in arrow function






