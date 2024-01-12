// => Working with strings <= //

// Length
function getLength(str) {
    console.log("Original string: ", str);
    console.log("Length: ", str.length);
}
getLength("Hello, World!");

// Higher level .length
let name = "Hannah Backer";
console.log(name.length);


// Index
function findIndexOf(str, target) {
    console.log("Original String: ", str);
    console.log("Index: ", str.lastIndexOf(target));
}
findIndexOf("Hello World World World", "World");


// Slice
// Lower level functionality of slice function
function getSlice(str, start, end) {
    console.log("Original string: ", str);
    console.log("After slice: ", str.slice(start, end));
}
getSlice("Hello World", 6, 8);

// Higher level syntax & substr
let value = "Mihir Menon";
let ans = value.slice(2, 5);
let ans1 = value.substr(2, 5);
console.log(ans);
console.log(ans1);

// Logic
function cutIt(str, startIndex, endIndex) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        if(i >= startIndex && i <= endIndex) {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
let value1 = "Mihir Menon";
console.log(cutIt(value1, 2, 5));


// replace 
// Low level functionality
function replaceString(str, target, replacement) {
    console.log("Original string: ", str);
    console.log("After reaplace: ", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript")


// easy method
let str = "Hello World"
console.log(str.replace("World", "JavaScript"));


// split
let value2 = "Hello my name is mihir";
let words = value2.split(" ");
console.log(words);


// trim 
let name1 = "   Mihir Menon   ";
console.log(name1.trim());


// toUpperCase() & toLowerCase()
let greeting = "Hello, How Are you?";
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());