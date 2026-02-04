// for loop 

for (let index = 0; index <= 10; index++) {
    const element = index;                              // the element is declared in the block scope so it is not accessible outside block 
   // console.log(element);                            
    
    if (element == 5) {         
       // console.log("5 is the middle number");
        
    }
}

for (let i = 0; i <= 10; i++) {                         // tovprint tables using for loop
  // console.log(`table for  ${i}`);

   for (let j = 0; j <= 10; j++) {
   // console.log(`inner loo ${j}`);

   // console.log(i + "*" + j + "=" + i*j);
   
   }
}



let myArray = [ "hinata", "mikasa", "makima"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);  
    
}



// break and continue

// *** break ***

for (let i = 0; i <= 10; i++) {

    if (i==5) {
      //  console.log(`5 is detected`);
        break                                          // to terminate the loop when a certain condition is met
        
    }
    //  console.log(`value of i is ${i}`);

}

for (let i = 0; i <= 10; i++) {

    if (i==5) {
        console.log(`5 is detected`);
        continue                                        // skips the current value of i and jmps to next value                                   // to terminate the loop when a certain condition is met
        
    }
   console.log(`value of i is ${i}`);

}

