let todayDate = new Date()                                   // to get current date
// console.log(todayDate);

// console.log(todayDate.toString());
// console.log(todayDate.toDateString());
// console.log(todayDate.toLocaleString());
// console.log(typeof todayDate);


// let myTimeStamp = Date.now()                            // now(): Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
// console.log(myTimeStamp);

// let createdDate = new Date("01-01-2026")
// console.log(createdDate.getTime());                       // getTime(): eturns the stored time value in milliseconds since midnight, January 1, 1970 UTC.


// ********************* IMPORTANT **************************

// to convert millisec into sec
// console.log(Math.floor(Date.now()/1000));

// **********************************************************



let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());                        // gets the month 
// console.log(newDate.getDay());                          // gets the day


newDate.toLocaleString('default',{
    weekday: "long",
    day: "numeric",
})
console.log(newDate);
