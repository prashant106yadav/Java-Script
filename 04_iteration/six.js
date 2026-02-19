// ***  Chaining ***

const myNums =[1, 2, 3, 4, 5, 6]

// const newNums = myNums.map( (num) => { return num * 10})
// console.log(newNums);


const newNums = myNums
                      .map( (num) => num *10)                          // here the numbers will be multiplies by 10
                      .map( (num) => num +1)                           // the values of the previous set of arrays will be used in this map function 
                      .filter( (num) => num >= 35)
                                                        

                    //   console.log(newNums);
                  

                      

                      

                      // *** Reduce ***


// syntax ***

// const initialValue = 0;
// cosnt sum = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 
//     initialValue
// )



const numbers = [1, 2, 3,]       

// const total = numbers.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)                                                                   // here 0 is the initial value

// console.log(total);




const cart = [
    {
        itemName: "ds course",
        price: 500
    },
    {
        itemName: "web dev course",
        price: 1500
    },
    {
        itemName: "cyber security course",
        price: 5000
    },
]

const priceToPay = cart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
