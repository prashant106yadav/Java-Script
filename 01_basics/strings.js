// const name = "prashant " 
// age = 20

// console.log(name + age + " hello");     // old way of using concatenation(avoid it)

// console.log(`Hello my name is ${name} and my age is ${age}`);       // modern way of using concatenation

// another way of declaring string 

const anime = new String('Itachi Uchiha')           // new String keyword is used 

// console.log(anime[6]);                           // white space and sumbols are counted in the length of the string
// console.log(anime.length);


// console.log(anime.toUpperCase());
// console.log(anime.indexOf('t'));                    // to find tje index of the a letter in string


// const newAnime = anime.substring(0,5)                 // creates new string from the previous one using given index
// console.log(newAnime);

// const newAnime2 = anime.slice(13,-7)                   // we can give negative value
// console.log(newAnime2);


// const anotherAnime = "   One Piece   " 
// console.log(anotherAnime);
// console.log(anotherAnime.trim());                   // removes the leading and trailing white space and line terminator characters from a string


// const email = "prashant@gmail-com"                     // Replaces text in a string
// console.log(email.replace('-','@'));                   // replace('value to be replaced', 'value which is to be used in place of replaced')



const newString = "hello my name is Monkey D.Luffy"
console.log(newString.split(' '));                       // Split a string into substrings using the specified separator and return them as an array.

