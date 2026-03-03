// i will send 10000 rupees tomorrow

console.log("I will send 10000 rupees tomorrow");

let futureCondition = true;

// Promise Producer
const promiseObj = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (futureCondition === true) {
            resolve("10000 sent successfully");
        } else {
            reject("10000 is not sent");
        }
    }, 10000);

});

// Promise Consumer
promiseObj
    .then((message) => console.log("Message in then:", message))
    .catch((errorMessage) => console.log("Error is:", errorMessage));