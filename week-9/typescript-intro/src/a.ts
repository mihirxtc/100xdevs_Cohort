// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// };

// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function greet(user: User) {
//     console.log("hi there " + user.firstName);
// }

// isLegal({
//     firstName: "Mihir",
//     lastName: "Menon",
//     age: 20
// });


// enum 

// enum Direction {
//     Up = "up",
//     Down = "down",
//     Left = "left",
//     Right = "right"
// }

// function doSomething(keyPressed: Direction) {
//     if (keyPressed == Direction.Up) {

//     }
// }
// doSomething(Direction.Up);
// console.log(Direction.Up);
// console.log(Direction.Down);


// enum usecase in express

// const app = express();

// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
//         res.status(ResponseStatus.Error).json({});
//     }
// })

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
//         res.status(ResponseStatus.NotFound).json({});
//     }
// })


// Generics in Ts

type Input = number | string;

function firstEl(arr: Input[]) {
    return arr[0];
}
const value = firstEl([1, 2, 3]);
// console.log(value);


// Generics Example

function identity<T>(arg: T) {
    return arg;
}
let str = identity<string>("mihir");
let num = identity<number>(1);


// solving problme statement of array

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

interface User {
    name: string;
}

const user = getFirstElement<User>([{name: "Mihir"}]);
console.log(user);


const el = getFirstElement(["student", "tutor"]);
const el1 = getFirstElement([1, 2]);
console.log(el.toLowerCase());
console.log(el1);


// importing & exporting

import { a, b } from "./b";
import c from "./b";


console.log(a, b, c);
