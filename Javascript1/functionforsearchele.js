
function findElementIndex(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return i;
        }
    }
    return "not found";
}

console.log(findElementIndex([10, 20, 30], 20));   // passing array and ele output as 1
console.log(findElementIndex([10, 20, 30], 50));   // passign array and ele output as not found from the function.
