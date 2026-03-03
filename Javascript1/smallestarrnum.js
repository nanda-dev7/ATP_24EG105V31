let arr1 = [90,78,65,98];

let smallest = arr[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < smallest) {
    smallest = arr1[i];
  }
}

console.log(smallest);