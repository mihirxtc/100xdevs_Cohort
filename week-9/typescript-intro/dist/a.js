"use strict";
// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     email?: string;
// };
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function firstEl(arr) {
    return arr[0];
}
const value = firstEl([1, 2, 3]);
// console.log(value);
// Generics Example
function identity(arg) {
    return arg;
}
let str = identity("mihir");
let num = identity(1);
// solving problme statement of array
function getFirstElement(arr) {
    return arr[0];
}
const user = getFirstElement([{ name: "Mihir" }]);
console.log(user);
const el = getFirstElement(["student", "tutor"]);
const el1 = getFirstElement([1, 2]);
console.log(el.toLowerCase());
console.log(el1);
// importing & exporting
const b_1 = require("./b");
const b_2 = __importDefault(require("./b"));
console.log(b_1.a, b_1.b, b_2.default);
