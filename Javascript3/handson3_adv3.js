
 /* Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
    */

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let employee_1=employees.filter((ele)=>ele.department=="IT")
console.log("The employees whose from IT department are=",employee_1);

/*2 .map()  map() to add:
            netSalary = salary + 10% bonus */
let netSalary = employees.map(emp => ({
  id: emp.id,
  name: emp.name,
  salary: emp.salary,
  department: emp.department,
  netSalary: emp.salary * 1.10
}));
console.log("The net salary is =", netSalary);


// 3. reduce() to calculate total salary payout
let total_salary=employees.reduce((acc,employee) => acc+employee.salary,0);
console.log("The total salary is =",total_salary);


// 4. find() employee with salary 30000
 let sal=employees.find(ele=>ele.salary==30000)
 console.log("The details of employee which is 30000 =",sal);


 // 5. findIndex() of employee "Neha"
 let index=employees.findIndex(ele=>ele.name=="Neha")
 console.log("The index of Neha is=",index);

