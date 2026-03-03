let data_of_ele=[12,34,36,78,91]
// filter 
let a=data_of_ele.filter((k)=>k>50)
console.log("The elements which are greater than 50 are",a);
// map 
let b=data_of_ele.map((v)=>v+10)
console.log("After adding 10 to the ele",b);
// reduce
const sum=data_of_ele.reduce((acc,val)=>acc+val,0)
console.log("Sum of array elements",sum);
// find
const ele=data_of_ele.find((k)=>k==91)
console.log("Element  is",ele);
// findindex
const ind=data_of_ele.findIndex((k)=>k==36)
console.log("Index of an element",ind);
