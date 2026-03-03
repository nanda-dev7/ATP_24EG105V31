function greatestNumber(a,b,c){
    if(a>b && a>c){
        console.log("a is greatest",a);
    } else if(b>a && b>c){
        console.log("b is greatest number",b);
    } else{
        console.log("c is greatest number",c);
    }

}
let num=greatestNumber(10,20,30) // function call with args 
console.log(num); // prints the number