// Synchronous is executing line by line or one after another
// Asynchronous JavaScript use it didnt block that code.
console.log("Hi")
setTimeout(()=> {  // setTimeout is a  Asynchronous function
    console.log("Task completed")
},7000)   // 7000 is 7 sec 
console.log("Asynchronous completed");
/* how it works in asynchronous and non blocking code 
--> console.log("start") --> it is non blocking code it goes and prints js engine single thread after this 
settimeout(callback,2000) --> the mainthread checks the 2 sec delay it sends to webapi or node js api after two sec completed it goes to call back queue
and immediately it goes to event loop after it goes to node js idle in this time all non blocking code prints in console.
console.log("End")     */

// Timer Function
// setInterval(()=> {},timeout) it call back function repeatedly by timeout sec
setTimeout(()=>{  // it executes only once after 2 sec 
       console.log("call back executed")
},2000);
console.log("hi");

setInterval(()=> { // it executes n times after 2 se 
    console.log("Your otp is")
},2000)

// promise function
// call in 5min
  // pending
    // fulfilled or rejected in future


// call you in 5seconds

console.log("Friend is waiting for a call in 5 seconds")
let futureCondition=true;


// promise producer(create promise)
const promiseObj =new Promise((fulfilled,rejected)=>{

    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("Hello")
        } else{
            rejected("Busy ")
        }

    },5000)
      fulfilled("promise fulfilled")
      rejected("promise rejected ")
})
// promise consumer 
promiseObj
.then(()=>{})
.catch(()=>{})




