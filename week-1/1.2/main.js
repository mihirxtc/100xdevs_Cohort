// Write a program to print all the even numbers in an array
// Write a program to print the biggest number in an array
// Write a program that prints all the male people's first name given a complex object
// Write a program that reverses all the element of an array

const ages = [21, 22, 23, 24, 25];

for (let i = 0; i < ages.length; i++) {
    if(ages[i] % 2 == 0) {
        // console.log(ages[i]);
    }
}

// Problem statement

const personArray = ["hannah", "clay", "justin"];
const genderArray = ["female", "male", "male"];

for (let i = 0; i < personArray.length; i++) {
    if (genderArray[i] == "male") {
        // console.log(personArray[i]);
    }
}

// Objects

let user1 = {
    name: "Mihir",
    gender: "male"
}
// console.log(user1["gender"]);

// Array of an object 

let allUsers = [{
        name: "Hannah Backer",
        gender: "female"
    },
    {
        name: "Clay Jenson",
        gender: "male"
    },
    {
        name: "Justin Foley",
        gender: "male"
    }
];

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender == "male") {
        // console.log(allUsers[i].name);
    }
}


// Functions

function getSum(a, b) {
    console.log(a+b);
}

// getSum(5, 2);

// callback functions

// problem statement

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    // return result;
    fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum


// const ans = sum(5, 2, displayResult);



// Problem statement
// callback function
// => passing functions as an argument is called callback function;

function calculateArithmetic(a, b, arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a, b);
    return ans;
}

function sum(a, b) {
    return a + b;
}

let value = calculateArithmetic(5, 2, sum);
// console.log(value);


// settimeOut function

function greet() {
    console.log("Hello, World!");
}

function greetAlien() {
    console.log("Hello, Alien!");
}

setTimeout(greetAlien, 2000);
setTimeout(greet, 3000);


// other

function calculatSum() {
    let result = sum(20, 30);
    console.log(result);
}

setTimeout(calculatSum, 1000)