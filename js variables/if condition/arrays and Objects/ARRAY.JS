//creating an empty array push all the even numbers 1-100
//creAT ANOTHER LOOP AND PRINT ALL THE EVEN NUMBERS THAT WE STORE ON THE ARRAY

let evenNumbers = [];
let start = 1;
let end = 200;
for (let num = start; num <= end; num++) {
  if (num % 2 == 0) {
    evenNumbers.push(num);
  }
}
for (let i = 0; i < evenNumbers.length; i++) {
  if (evenNumbers[i] >= 50 && evenNumbers[i] <= 150) {
    console.log(evenNumbers[i]);
  }
}
//===========================================================================================
let fruits = ["apple", "Orange", "Grape", "Pineapple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//=================================================================
let numbers = [1, 2, 3, 4, 5];
let totalSum = 0;
for (let i = 0; i < numbers.length; i++) {
  totalSum += numbers[i];
}
console.log("The sum of all elements:", totalSum);
//==============================================================================

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let largestNumber = num[0];
for (let i = 1; i < num.length; i++) {
  if (num[i] > largestNumber) {
    largestNumber = num[i];
  }
}
console.log("The largest element ", largestNumber);
//===============================================================================
function index(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      console.log("Element found at index:", i);
      return i;
    }
  }
  return -1;
  console.log("Element not found in the array.");
}
let array = [1, 2, 3, 4, 5, 6];
let indexValue = index(array, 30);
if (indexValue === -1) {
  console.log("item not found");
} else {
  console.log("index value", indexValue);
}
//===========================================================\
function findSmallElement(array) {
  let smallValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallValue) {
      smallValue = array[i];
      console.log("the smallest number in  the array");
      // return smallValue;
    }
  }
  console.log("smallest nummber ", smallValue);
}
let arrays = [-3, 5,-4, 2, 7];
findSmallElement(arrays);
//===============================================================================================

function findAverage(array) {
  let sum = 0;
  if (array.length ==0) {
    }
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  const average = sum / array.length;
  console.log(average)
  //  return average;
}
let arrayss=[1,2,3,4,5,6];
findAverage(arrayss)
let arraysss=[10,20,30,40];
findAverage(arraysss)
console.log()