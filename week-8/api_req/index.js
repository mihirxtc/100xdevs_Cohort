// axios vs fetch
const axios = require("axios");

// default async function
async function main() {
    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await res.json();
    console.log(json.todos);
}

// axios function
async function main1() {
    const res = await axios("https://sum-server.100xdevs.com/todos", {
        method: "GET"
    });
    console.log(res.data.todos);
}

// main();
main1();