/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28 */

//  1. filter() temperatures above 35
const temperatures =[32,35,28,40,38,30,42];
let temp=temperatures.filter((ele)=> ele>35);
console.log("The temperatures above 35 are:",temp);   // output [40,38,42]

// 2. map() to convert all temperatures from Celsius → Fahrenheit
const fahrenheit_temp=temperatures.map(temp=> (temp*9/5)+32); 
console.log("Converted temperature is",fahrenheit_temp)

//  3. reduce() to calculate average temperature
const avg_temp=temperatures.reduce((acc,ele)=>acc+ele,0)/temperatures.length;
console.log("Average temperatures is :",avg_temp);

// 4. find() first temperature above 40
const above40=temperatures.find(ele=> ele>40)
console.log("Above 40 temperatures is ",above40);

// 5. findIndex() of temperature 28
const index=temperatures.findIndex(ele=> ele==28)
console.log("Index of 28 is:",index);


