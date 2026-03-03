
/* Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node" */
const courses = ["javascript", "react", "node", "mongodb", "express"];

 // 1. filter() courses with name length > 5
let length=courses.filter((ele) =>ele.length>5)
console.log("The length of string which is greater than 5",length);

//  2. map() to convert course names to uppercase
let uppercase = courses.map((ele)=> ele.toUpperCase())
console.log("Uppercase strings are:",uppercase);



// 4.  find() the course "react"
let find=courses.find((ele)=>ele=="react");
console.log("Course is:",find)

//  5. findIndex() of "node"
let find_index=courses.findIndex((ele)=>ele=='node');
console.log("The index of node is:",find_index);



