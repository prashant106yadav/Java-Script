// Immediately Invoked Function Expression (IIFE)

// to remove the pollution of global scope we use IIFE 

// declaration of function in an iife

// ( function coffee() {
//     console.log("DB CONNECTED");
// }) ()


// declaration of arrow function in an iife 

// ( () => {
//     console.log("DB CONNECTED TWO");
    
// }) ()



// *** while writing two iffe simultanously we must use semicolon at the edn of first iife to avoid errors ***

// ( function coffee() {                                        // named iife
//     console.log("DB CONNECTED");
// }) ();                                                       // semicolon must be used at the end of of first iife

// ( () => {                                                    // simple iife
//     console.log("DB CONNECTED TWO");
    
// }) ()



// to pass parameters and arguments in iife


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ("Doreamon")
