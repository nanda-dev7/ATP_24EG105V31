/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92 */
const marks = [78, 92, 35, 88, 40, 67];
// 1. filter() marks ≥ 40 (pass marks)
let marks1=marks.filter((ele) => ele>=40)
console.log("Marks which are greater than 40 are:",marks1);

// 2. map() to add 5 grace marks to each student

let grace_marks =marks.map(ele=>ele+5)
console.log("Updated marks are:",grace_marks);

// 3. reduce() to find highest mark

let max_marks=marks.reduce((acc,element)=> acc>element ?acc: element)
console.log("Maximum marks are:",max_marks);

// 4. find() first mark below 40
let first_mark =marks.find(ele=>ele>40)
console.log("First mark after 40 is:",first_mark);

// 5. findIndex() of mark 92

let index=marks.findIndex(ele=>ele==92)
console.log("Index of 92 is:",index);
    


