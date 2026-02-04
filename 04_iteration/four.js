// for each loop

const coding = ["js", "java", "cpp", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// coding.forEach ( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "c++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
  
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
});
