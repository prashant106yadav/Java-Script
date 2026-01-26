// Objects singleton

// const instaUser = new Object()                         // singleton object
// const instaUser2 = {}                                  // non-singleton object

// const instaUser = {}
// instaUser.id = "123abd"
// instaUser.name = "sam"
// instaUser.email = "qwe123@.com"

// console.log(instaUser);

const fbUser = {                                                  // objects within objects
    email: "someone@gmail.com",
    username: {
        fullname: {
            firstname: "Sam",
            lastname: "Yadav"
        }
    }
}
// console.log(fbUser);                                              // accessing objects within objects  
// console.log(fbUser.username);
// console.log(fbUser.username.fullname);
// console.log(fbUser.username.fullname.firstname);



const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const allobj = Object.assign({}, obj1, obj2, obj3)                 // Object.assign : merging objects

const allobj = {...obj1, ...obj2, ...obj3}                            // use this method for merging 

// console.log(allobj);



const users = [                                          // objects within arrays
    { 
        name: "abc",                                     // index : 0  
        email: "abd@bns"
    },
     {
        name: "plop",                                   // index : 1
        email: "123@bns"
    },
     {
        name: "mbn",
        email: "abd@098"                                // index : 2
    }
]
// console.log(users[1].name);                          // method to access objects and its key & values
// console.log(users[2]);



const instaUser = {}
instaUser.id = "123abd"
instaUser.name = "sam"
instaUser.email = "qwe123@.com"

// console.log(instaUser);

// ************* the output of these syntaxs is in the form of arrays which is very useful ***************
// console.log(Object.keys(instaUser));                      // method to access keys of the object
// console.log(Object.values(instaUser));                    // method to access values of the object
// console.log(Object.entries(instaUser));                   // method to access keys and values of the object

// console.log(instaUser.hasOwnProperty('isLoggedIn'));      // Determines whether an object has a property with the specified name.




// ***** de-structure of Objects *****

const match = {
    matchName: "IPL",
    matchScore: 250,
    playerName: "Prashant Yadav"
}
// console.log(match.playerName);                             // regular method to get output

const {playerName} = match
console.log(playerName);                                      // output using de structure method
                                       

const {playerName: player} = match                            // output using de structure method   
console.log(player);                                          // we can rename it

