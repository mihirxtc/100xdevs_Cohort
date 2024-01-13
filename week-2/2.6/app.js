// filter, map, arrow fn

// =====> map() <=====
const input = [1, 2, 3, 4, 5];

// => normal way
// const newArray = [];
// for(let i=0; i<input.length; i++) {
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);


// => using map()
// function transform(i) {
//     return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans);

// => more cleaner
const ans = input.map(function(i) {
    return i * 2;
});
console.log(ans);


// =====> filter() <=====

const arr = [1, 2, 3, 4, 5];

// => one way
// const  newArr = [];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// => filter()
const ans1 = arr.filter((n) => {
    if(n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(ans1); 

// Create a map fun that takes an array and a transform fn as input and returns the transformed array as output.
