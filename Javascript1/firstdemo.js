// First Program of javascript   /* Multiline comments */   variable = var 
                                     // let is the keyword to declare variables 
let a;                               // let or const represents the a is a variable and it can accept any kind of data.
a=31; 
console.log("value of a is",a)       // it prints to the console    console is predefined object and log is method
                                     // assignment of a var
let b=100;                           // Intializing the var 
let name='vivekananda';              // string type
let status=true;                     // bool type 
let marks_of_class=[95,"vivek",77];  // array type { group of elements }
console.log(marks_of_class);
let person ={                        // object type { group of properties having key value paris}
    pid:100,                         // property
    person_name:'ravi'               // property 
}
console.log(person);


  /* node  js is runtime for js 
  // ; is not mandatorary in js 
  // string can be placed in single or double quotes  js
   js supports homogenous and hetrogenoues datatypes 
   js is dynamic typed programming language  bcs a variable can store diff type of datatype */




   let c;
   console.log(typeof c)            // by default undefiend bcs we didnt declare any datatype.
   c=20;
   console.log(typeof c)

 c=[96,"vivek",77];
console.log(typeof c) // type of is a keyword to check the datatype of a variable array nd object are methods
   // malloc and calloc return the address.
 /* Memory 
 Stack Memory                                      
 1) it stores the data of a primitive data types and it stores the reference of array and objects 
  Heap Memory 
  1) it stores the data of array and objects.            Simple Rule to Remember

Stack → Primitive values + Object references

Heap → Actual objects and arrays  */
    
    
/* Compiler of js 
     compiler check the first line and check the variable and sees the scope of a variable 
during compilation only inialization happens execution starts and checks the scope declaration happens*/
/* example of code 
   console.log(b)     err popouts like b before initialazation.
   let b=100  // if b is not declared it pop outs like b is not defined.
   */
  
   
/* IN JS == OPERATOR COMPARES THE VALUES DOESNT COMPARE DATATYPES
   === STRICT EQUAL COMAPRISON IT COMPARES THE FIRST DATA TYPES AND AFTER VALUES 
   code of example 
   let a=100;
   let b="123";
   console.log(a==b) // it prints true if we compare with strict === it became false */
   /* Control Statements ---> decision making 1) if 2) if else 3) if else if iteration 1) for loop 2) while loop 3) do while loop
   // switch case */
   // iteration of while loop is not in advance for loop is if we know iterations in advance
  /* ---------------------ARRAY-------------------------
  1) array can be changed not whole array using push operator 
  2) array len can be changed        */
       /* Functions   
       1) Function declaration 
             function name(parameters){   // parameters are the var  WHEN FUNCTION IS CALLED ONLY THE PROGRAM EXECUTES 
               OTHERWISE IT DOESNT RETURN ANY VALUES 
               body of the func
             } */
   // exmample of the code
   function addSum(a,b){
    let sum=a+b;
    return sum;
   }
  let result= addSum(10,20);
   console.log(result);

   /* Function expression IN JS WE CAN STORE FUNCTION IN A VARIABLE
   function without name is called anonymous function 
   ex
   */
  let test=function(a,b){
    let sum=a+b;
    return sum;
  } 
  // function call
  let result1=test(50,32)
  console.log(result1);

  /* Arrow func it is used to write function expression */
  let test2=(a,b) => a+b;
  let result3= test2(1,2)
  console.log(result3)
  

