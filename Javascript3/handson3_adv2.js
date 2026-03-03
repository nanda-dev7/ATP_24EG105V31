/* ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
   */


   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];


// 1. filter() students who passed (marks ≥ 40)

let passed_stud=students.filter((ele)=>ele.marks>=40)
console.log("Students who are greater than equal to 40=" ,passed_stud);

/* 2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D  */
let studentsWithGrade = students.map(student => {
  let grade;

  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return {
    id: student.id,
    name: student.name,
    marks: student.marks,
    grade: grade
  };
});
console.log("Students with Grades are =", studentsWithGrade);

 // 3. reduce() to calculate average marks

 const totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
const averageMarks = totalMarks / students.length;
console.log("Average marks are=",averageMarks);

 // 4.find() the student who scored 92
    let det_of_student=students.find(ele=>ele.marks==92)
    console.log("Details of student whose marks are 92=",det_of_student); 

    // 5. findIndex() of student "Kiran"
     let indexof_key=students.findIndex((ele=>ele.name=="Kiran"))
    console.log("The index of Kiran is =",indexof_key);

