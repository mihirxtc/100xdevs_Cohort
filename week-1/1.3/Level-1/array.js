// let initialArray = [1, 2, 3];

// function logThing(str) {
//     console.log(str);
// }

// initialArray.forEach(logThing);

// logThing(1)
// logThing(2)
// logThing(3)

// Understanding

function log1() {
    console.log("Hello World 1");
}

function log2() {
    console.log("Hello World 2");
}

function logWhatsPresent(fn) {
    fn();
}

logWhatsPresent(log2)