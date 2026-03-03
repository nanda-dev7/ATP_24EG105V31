
 // BASIC OPERATIONS ON OBJECTS
   let person ={  // person is the reference var of a object it store in stackmem and properties stored  in heap
    name:"Robb",
    age:37
   }
// adding a new prooperty
person.city="hyd";
// updating a new property 
person.name="Jon";
// deleting a property 
  delete person.age;
console.log(person);
// Advance operations on array or ES6 Methods 
// call back function is a function that passes as argument to another function  
// advance operation will create the new array copy of the array opposite to array
let test=[90,45,-23,67,73];
// filter operation is for only selection 
// not for modifying like adding 10 to every ele in an arr
// in 2015 we dont have filter operation before this we use  for of and if loop 
let r=test.filter((element)=> element>30);  // arrow function doesnt need any return value 
console.log(r);
// get element 40 and 80
let k=test.filter(element=> element>40 && element<80); 
console.log(k);

// map operation it modifies the array elements 
// dont filter the elements in map operation if we do it sends the array of bool elements 
let v=test.map(element=>element+10);
console.log(v);
let l=test.map((element)=> element>30);  // if we select the ele using map we get bool array of ele 
console.log(l);

const b=test.map(element=>{ // we can use bunch of lines if we have more than one condition
    if(element<50){
        return element+10;
    } else{
        return element-20;
    }
})
console.log(b);
// reduce it returns into a single values
// it takes always two parameter in map and filter the second parameter is optional
// first parameter is accumulator and second one is element
// SUM OF ELEMENTS USING REDUCE 
const sum=test.reduce((accumulator,element)=>accumulator+element)
/*                        90         45          135
                          135        -23          112
                          112       67           179
                          179       73           252
                          sum = 252 
                          */
console.log(sum);

// wap to get max ele in array using map
let max=test.reduce((accumulator,element)=> {
    if(accumulator>element){
        return accumulator
    }
    else 
    return element;
})
console.log(max);
// wap to get min ele in array using map
let min=test.reduce((accumulator,element)=> {
    if(accumulator<element){
        return accumulator
    }
    else 
    return element;
})
console.log(min); 
// other methode 
let min_ele=test.reduce((acc,element)=> acc<element ?acc: element)
console.log(min_ele)

// other methode 
let max_ele=test.reduce((acc,element)=> acc>element ?acc: element)
console.log(max_ele)

// Search 
const ele =test.find(element=> element==90)
console.log(ele);
// find Index
const elem =test.findIndex(element=> element==90)
console.log(elem); // it returns the index of a an ele
// Sort ele 


let newArray=test.sort()
console.log("new array is",newArray);


let data=[10,9,7,11]                 /* the code prints 10,11,7,9
                                         bcs it is 10 as first number it takes bits wise or lexical level comparison*/
let newArray1=data.sort()
console.log("new array is",newArray1);


// sort () 
let dat=[9,10,7,11]
let new1=dat.sort((a,b)=>a-b)    // ascending ord =a-b desc order is b-a
console.log("new array is ",new1);
console.log("data is ",dat);



const studentss= [
    { id:1, name:"Ravi",marks:78},
    { id:2, name:"Kiran",marks:77},
    { id:3, name:"virat",marks:89}

];

let sumofMarks=studentss.reduce((acc,stdObj)=> acc+stdObj.marks,0)
console.log(sumofMarks);





// error handling 
 // console.log(mp);   // Reference errop: mp is not defined
 console.log("first")
 try{
 console.log(vi)
 }
 catch(err){
    console.log(err.message);  // it tells the what typ of the err or explains the err
 }
 console.log("second");

// Modules 
/* We can make the code as modular and modules can share data other modules */


 

 
 






  


