// Objects literals

// const myInfo = {}                                  // object declaration
// const myInfo = new Object()                        // another way of declaring  


const sym = Symbol("Naruto")                          // method to declare symbol



const jsUser = {
    name: "Hinata",                                   // String
    "fullName": "Hinata Hyuga",                       // this can only be accessed via second method
    age: 20,                                          // Number
    location: "Leaf Village",                         // String
    email: "hinata@acb.com",
    isLoggedIn: false,                                // Boolean
    lastLoggedIn: ["Monday", "Tuesday"],              // Array

    // sym: "Naruto"                                     // wrong way to declare symbol as a key
    [sym]: "Naruto"
}

// console.log(jsUser.name);                             // method to access object
// console.log(jsUser["fullName"]);                      // another method to access object   { remember both }
// console.log(jsUser[sym]);                             // method to access symbol

// jsUser.email = "hinata@xyz.com"                       // method to change the value of key
// Object.freeze(jsUser)                                 // freeze: Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// console.log(jsUser.greeting);                            // wrong way to access function(greeting)



