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
