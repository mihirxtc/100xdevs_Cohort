// Loop (for loop)
// let ans = 0;

// for(let i = 1; i <=100; i++) {
//     ans+=i;
// }
// console.log(ans);


// Functions
function findSum(n) {
    let ans = 0;
    for (let i = 1; i < n; i++) {
        ans+=i;
    }
    return ans;
}

let ans = findSum(100);
console.log(ans);


// Using function inside a function

/*
function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSquare(a, b) {
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2;
}

function sumOfCube(a, b, c) {
    const val1 = cube(a);
    const val2 = cube(b);

    return val1 + val2;
}

console.log(sumOfCube(10, 10)); */


// Without violating DRY rule

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, fn) {
    let val1 = fn(a);
    let val2 = fn(b);

    return val1 + val2;
}

console.log(sumOfSomething(10, 10, cube));