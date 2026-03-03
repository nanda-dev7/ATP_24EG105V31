// promise function
// call in 5min
  // pending
    // fulfilled or rejected in future


// call you in 5seconds

console.log("Friend is waiting for a call in 5 seconds");

let futureCondition = false;

// Promise Producer
const promiseObj = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (futureCondition === true) {
            resolve("Hello");
        } else {
            reject("Busy");
        }
    }, 5000);

});

// Promise Consumer
promiseObj
    .then((message) => console.log("Message in then:", message))
    .catch((errorMessage) => console.log("Error is:", errorMessage));