// for of loop

const arr =[1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
}


const anime = "Naruto"
for (const name of anime) {
   // console.log(name);
    
}
const myAnime = ["naruto", "death note", "black clover"]
for (const list of myAnime) {
   // console.log(list);
    
}


// *** Maps ***

const map = new Map()

map.set('In', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")
map.set('In', "India")                                  // duplicate copies of data is not allowed in maps

// console.log(map);

for (const key of map) {
   // console.log(key);                                   // this prints the keys and values in form of arrays
    
}

for (const [key, value] of map) {
   // console.log(key, ':-', value);                       // this prints the key and the values seperately
    
}


// *** Objects are not iterable by for of loop ***

// const myObj = {
//     anime1 : "Bleach",
//     anime2 : "tokyo ghoul"
// }

// for (const [key, value] of myObj) {
//     console.log(key, value);
    
// }


// for in loop

const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(myObject[key]);                                      // to get the values of the key in object
  console.log(`${key} shortcut is for ${myObject[key]}`);  
}
