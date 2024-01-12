class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType() {
        console.log("Animal");
    }
    speak() {
        console.log("Hi there, " + this.speaks);
    }
}

// If you have static() method it can be called without instantiating the objects

console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhow bhow");    // creating object
let cat = new Animal("cat", 4, "meow meow"); 

dog.speak() // calling function on object



// Data

let currentDate = new Date();
console.log(currentDate.getMonth() + 1);


// get the execution time of function

function calculateSum(n) {
    let a = 0;
    for(let i = 0; i < n; i++) {
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beoforeTimeInMs = beforeDate.getTime();

calculateSum(100000);

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beoforeTimeInMs);