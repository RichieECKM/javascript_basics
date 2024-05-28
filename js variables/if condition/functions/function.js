// let num1 = 10;
// let num2 = 25;
// function sum () {
//  let sum = num1 + num2;
//  console.log("sum", sum)
// }
// sum()

// function getMul(){
//     let mul = num1*num2;
//     console.log("mul" ,mul)
// }
// getMul()

// function getSub(){
//     let sub = num2-num1;
//     console.log("sub" ,sub)
// }
// getSub()

// function getDiv(){
//     let div = num1/num2;
//     console.log("div" ,div)
// }
// getDiv()

// function getMod(){
//     let mod = num1%num2;
//     console.log("mod" ,mod)
// }
// getMod()

// function getPower(){
//     let pow = num1**num2;
//     console.log("pow" ,pow)
// }
// getPower()

// // arguments
// function getcube (num1 ,num2){
//     let sum =num1+num2;
// console.log(num1,'+',num2 ,'=' ,sum);
// }
// getcube(2,3)

// // DEFAULT VALUES
// function getcube (num1=3 ,num2=1){
//     let sum =num1+num2;
// console.log(num1,'+',num2 ,'=' ,sum);
// }
// getcube()

// // rETURN

// function getInfo(){
// return "hello john! How r u?";
// }
// document.write(getInfo());

// function getcube (num1=3 ,num2=1){
//     let sum =num1+num2;
// console.log(num1,'+',num2 ,'=' ,sum);

//  return sum;
// }
// a=getcube(5,6)
// console.log(a)

// // LOcal VARIABLE

// function showMessage () {
// let message = "Hello, I'm JavaScript!";
// console.log( message );//shown in console
// }
// showMessage();
// console.log( message );//shown only inside the function //not shown

// function getFact (a){

//     let fact = 1;
// for (let i = 1; i <= a; i++) {
//   fact *= i;
// }
// console.log(fact);
// }
// getFact(5)

// function Average(num1, num2, num3) {
// return (num1 + num2 + num3) / 3;
// }
// var average = Average(10, 20, 30);
// console.log("The average is: " + average);

function getRev(num) {
  let i = 0;

  while (i <= num) {
    if (num / 10 == 0) {
      console.log(num);
    }
    // else if{i

    // }
    else {
      console.log(num);
    }
    i++;
  }
}
getRev(123);

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    console.log(reversed);
    num = Math.floor(num / 10);
    console.log(reversed);
  }
  return reversed;
}
const num = 1234567;
const reversedNumber = reverseNumber(num);
console.log("Original number:", num);
console.log("Reversed number:", reversedNumber);

function Factors(num2) {
  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) {
      console.log(i);
    }
  }
}
Factors(10);



function sum(num1, num2){
  let sum = num1 + num2;
  console.log(num1)
  console.log("sum",sum)
  }
  sum(10,20)
  sum(20,20)

  function sub(num3, num4){
    let sub = num3 - num4;
    console.log("sub",sub)
    }
    sub(90,20)
    sub(20,20)

    function mul( num5,num6){
      let mul = num5 *num6;
      console.log("mul",mul)
    }
    mul(3,5)
    mul(6,7)

    function div( num8,num9){
      let div = num8/num9;
      console.log("div",div)
    }
    div(10,2)
    div(20,10)


