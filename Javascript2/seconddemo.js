/* Function can 
     store in a var
     can return another function
     can receive a function as argument */
// Function can return all primitive data type and object and arrays
function test(){
    return 121
}
console.log(test()) // only to test the what function return value

let res=test()   // we are storing the return value in another variable in the rem program we can use the res var 
console.log(res);
/* or we can return the value like console.log(test()) */ 
/* ----------------Function Expression -----------------------*/
let test2 = function(){
    return 144
}
let result1 = test2()
console.log(result1);

// Function returning the another function 
let test3=function(){
    return function(){
        return 169
    }
}
let result3=test3()
console.log(result3());   // result()--> return 100 result --> returns anonymous function 
/* Game using functions -------------------
The usage of this function we can create new levels of a same name */
// FUNCTION WITH REUSABLE FOR MULTIPLE LEVEL WITH SAME NAME 

let createGame=function(username){
    return function(level){    // returning the another function as parameter as level of the same name
       console.log(`Hello ${username}, you are at level ${level}`);  // backtics used in print function not normal sinle quotes
    }
}
let createlevel=createGame('nanda')
createlevel(1);
createlevel(2);
createlevel(9);

let level=createGame('koushik')
level(5);
level(6);

let test7=function(v){
    console.log(v);
}
test7(2);
test7(function(){})   // Function anonymous 

// Exmaple for above code   A function can recieve a function as argument IN JS FUNCTION ARE FIRST CLASS OBJECTS
// makepayment calling UPIpayment and cardPayment
let makePayment=function(amt,paymentMode){
console.log(`Payment of${amt} started`);
paymentMode()
}

let UPIPayment=function(){
    console.log("UPI PAYMENT DONE");
}     
let cardPayment=function(){
    console.log("Card Payment is done ")
}
makePayment(2000,UPIPayment);
makePayment(12000,cardPayment);


/* SCOPE OF THE VARIABLE 
 let a=10 // global var the lifetime when the program executes completed
 function varible the lifetime when the function is exectues completed we cant use the var in outside the fucn 
 if{
    let a=10 // block scope 
 } */
// GLOBAL SCOPE >> FUNCTION SCOPE >> BLOCK SCOPE

/* CLOSURE PROPERTY */ // removed from call stack memory and Stored in the heap memory permantently
let sum=function(x){ // In the function x is called after the function execution is completed the x is stored in heap memory in temporatily by closure property
     // call back function is a function that passes as argument to another function
    return function(y){
        return x+y;
    }
}
let x=sum(10);         
console.log(x(20));
/* EVERY JS FUNCTION HAS CLOSURE PROPERY BCS OF CLOSURE PROPERTY VAR OF OUTSIDE SCOPE WILL MAINTAINED TEMPORARILY EVEN THE OUTSIDE FUNCTION EXECUTION IS COMPLETED */



/* collections
   Array{pack of homogenoues ele}  [ Ordered collection]
   Objects{ pack of properties } [UnOrdered Collection]
   Array of  Objects */
let marks=[8429,32,31];   // ref var is marks not name of an array     // in array if update any thing the all the operation will do in original array
//  // in the js if we print out of the index it will get as undefined  
// to iterate an arr in modern application 
// for-of loop ex
for(let v of marks ){ /* this loop will work on element type of index */
    console.log(v);
}
 // OBJECT [ we cant say that first property is the first one for studnt refrence ]
let student={         
    stu_no:100,
    stu_name:"vivekananda",
    stu_age:19,
    course:"B-Tech"
}
console.log(student);
console.log(student.stu_no); // . operator access the specific property 
// for in loop it return the key values of reference of student 
for (let v in student ){
    console.log(student[v]); // output as stu_no stu_name stu_age, course
}  

/* Array of Objects */
let emps=[{eno:1,name:'bhanu'},{ eno:2,name:'koush'}];
for (let i = 0; i < emps.length; i++) {
  console.log(emps[i].name);
}

let student7={
    rollNo:1,
    firstName:"Ravi",
    lastName:"Kiran",
    marks:[90,42,24],
    address:{
        city:"hyd",
        pincode:"500088",
    },
    getFullName: function(){
        return this.firstName+this.lastName;
    },
    getavgMarks: function(){
        let sum=0
        for(let v=0;v<this.marks.length; v++){
            sum=sum+this.marks[v];
        }
        avgmarks=sum/this.marks.length;
        return avgmarks;
    }
    
};
console.log(student7.getFullName())
console.log(student7.getavgMarks());  // avg marks of the student property of 






/* ------------------------------------------------------------____________-------___________________----------------______________-_____--*/


// BASIC OPERATIONS ON ARRAY 

let testarry=[40,50]
// Dynamic insertion 
testarry.push(12,23) // we can pass as many args as we can.
console.log(testarry); // push is the method that can add a elememnt to the end of the arry
testarry.unshift(1,2)   //  unshift is the method that can add a elememnt to the start or beg  of the arr
console.log(testarry)  // we can pass as many args as we can.
// In between (index based insertion )
testarry.splice(2,0,12,23) // first one is where you want to isert 0 is for delete and third is for elment insertion at specofic index

console.log(testarry);

// Deletion of arry
let array=[1,2,3,4,5,6]
array.shift(1);    // the first element in ary is deleted in ary it removes atmost one element pop and shift are parameter methods 
console.log(array);
// pop method to remove the last elemt in ary it removes atmost one element
array.pop();
console.log(array);
// splice method 
array.splice(2,1);  /* in these we can delete more than one ele in this 2 is start form and after 1 is for 3rd index will be deleted 
 if in place 1 it is 2 the next 3rd index and 4th index will be deleted */
 console.log(array); 


 // BASIC OPERATIONS ON OBJECTS




















    