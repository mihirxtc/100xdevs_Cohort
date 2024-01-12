// Parse json string
const user = '{"name": "mihir", "age": 20, "gender": "male"}'

const str = JSON.parse(user);
console.log(str["name"]);


// Stringify json string

const user1 = {
    name: "Mihir",
    age: 20
}

const finalString = JSON.stringify(user1);
console.log(finalString);