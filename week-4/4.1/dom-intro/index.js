
let timeout;
function debounceCalculate() {

    // delay the call to calculate until i've not been called for 100ms
    // and i've been called atleast once

    clearTimeout(timeout);

    timeout = setTimeout(() => {
        calculate();
    }, 1000);

}

// Backend with async-await
async function calculate() {

    const a = document.getElementById("firstInput").value;
    const b = document.getElementById("secondInput").value;

    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b);
    const ans = await response.text();
    document.getElementById("sum").innerHTML = ans;

}

// Backend with promise
// function calculate() {

//     const a = document.getElementById("firstInput");
//     const b = document.getElementById("secondInput");

//     fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
//         .then((response) => {
//             response.text()
//                 .then((ans) => {
//                     document.getElementById("sum").innerHTML = ans;
//                 });
//         });

// }


// Simple JavaScript
// let firstInput = document.getElementById("firstInput");
// let secondInput = document.getElementById("secondInput");
// let sum = document.getElementById("sum");

// function calculate() {
//     let finalSum = parseInt(firstInput.value) + parseInt(secondInput.value);
//     sum.innerText = "final sum is: " + finalSum;
// }