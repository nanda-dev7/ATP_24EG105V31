// Class
// No space is allocated to class but for method space is allocated object has physical existence and class has logical existence
// we can create objects without class and it is called as object literal 
// OBJECT LITERAL
const test={
   a:10
}
console.log(test);


// create 20 objects using class
class Student{
    // properties of class
    sno;               // #sno is a private sno is public
    name;
    email;
    // constructor --> special method it executes or called automatically
    constructor(sno,name,email){  
     // initalize the object 
     this.sno=sno;
     this.name=name;
     this.emial=email;
    }
    // methods 
    getStudentName(){
        return this.name;
    }
}
// create objects
let std1=new Student(10,'ravi','ravi@gmial.com');       // ---> calling the class means it calls the constructor classes cannot be called
let std2 = new Student(11,'kiran', 'kiran@gmail.com');
let std3 =new Student(12,'venkat','venkat@gmail.com');

console.log(std1.name);

// Both composition and inheritance is used for resuability 



/* Optional chaining and NUllish caolescing */


const Student3={
    pid:101,
    name:"vivekananda"
}
 console.log(Student3.pid);
 console.log(Student3.name);
 console.log(Student3.marks); // undefiend
  // console.log(Student3.marks.length) // we get err as  Cannot read properties of undefined 
 // TO overcome this 
 console.log(Student3.marks?.length)  // Optional chaining
 console.log(Student3.marks?.length??"Marks are not available");   // NUllish caolescing

 /* Spread Operator (create copies of arrays and objects)
  // create copy 
  // add ele / properties while copying 

  */
 // creatign a copy of primitives
 let v=100;
 let h=v; // copy 
 // non primitives  like objects , arrays
 let v1={
    name:'vivek',
    age:18
 };
 let h1=v1;
  // it creates the another reference to the same object for this we didnt use assignment operatar to copy 
// if we make one reference var it changes the other example
let v2={
    name:'viveka',
    age:19
 };
 let h2=v2;
 v2.name="kous"
 console.log(v2);
 console.log(h2);
 // TO over come this for objects these two are plain objects it doenst have any nested objects
 let originalObj={a:10,b:20}
 let copyobj={...originalObj};  // Spread Operator
 originalObj.a=123
 console.log(originalObj);
 console.log(copyobj);
 // For Arrays
 let array1=[10,20,30]
let copyarray1=[...array1]
array1.push(1234)
console.log(array1);
console.log(copyarray1);

// What if the object has nested object
// Shallow Copy
let person={
    name6:"dheer",
     address:{
        city:"hyd",
        pincode:50022
     }
    }
    let copyPerson={...person}
    person.name6="nava";
    person.address.city="vij";
console.log(copyPerson);
console.log(person);

// Deep copy

let person2={
    name7:"dheer",
     address:{
        city:"hyd",
        pincode:50022
     }
    }
    let copyPerson1=structuredClone(person)
    person2.name7="nava";
    person.address.city="vij";
console.log(copyPerson1);
console.log(person2);

// Addine elements usign spread operator 
// adding ele copy of arr
let arr=[1,2,3,4,5]
let cpar=[...arr,7] // adding cpar array to last element output as 1,2,3,4,5,7
console.log(arr)
console.log(cpar);
// adding property copy of arr
let met1={
    name:"koti"
}
let copyofmet1={...met1,name1:"ravi"};
console.log(met1);
console.log(copyofmet1);


// Rest Parameter it syntax is same as spread operator ... 
// if we dont know how many parameter we pass when we call the function 
// Rest parameter can recieve any nmber of arguments 

function findSum(...a){  // Rest Parameter
    console.log(a);
}
findSum(10,20,30,40)


/* function findSum(...a1,b1){  // Rest Parameter can take all the values we should write any thing after a rest paramter err:Rest parameter must be last formal parameter
    console.log(a1,b1);
}
findSum(10,20,30,40) */
// sum for using rest parameter
function Sum(...v){
  let totalsum=v.reduce((acc,ele)=>acc+ele);   // for object we intialize 0 not array
  return totalsum
}
let totalsum=Sum(10,20);
console.log(totalsum);

// Destructuring(unpacking)
// it allows declare array of variables 
// Unpacking of array 
let arr9=[10,20,30];
let [a,b,c]=arr9;
console.log(a,b,c);


// Unpacking of objects

let emp8={
    eid5:102,
    company:"Virtusa"
}

let {eid5,company}=emp8;   //have to same keys in let.
console.log(eid5,company);


// for nested objects

let emp5={
    eid7:105,
    company1:"TCS",
    address:{
        city:"hyd"
    }
}

let{eid7,company1,address:{city}}=emp5;
console.log(eid7,company1,city)





