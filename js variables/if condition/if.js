let age = 10;
if (age >= 20) {
  console.log("Eligable");
} else {
  console.log("Not Eligable");
}
document.write("<h2>  Age =10 </h2>");
document.write("<h2> age>= 20  </h2>");
document.write("<h2> Not Eligable </h2>");

var a = 40;
if (a % 2 == 0) {
  console.log(" a is even number");
} else {
  console.log(" a is odd number");
}

let temp = 30;
if (temp >= 30) {
  console.log("Its hot outside");
} else {
  console.log("it's not too hot today");
}
document.write("<h2>  ques 1 </h2>");
document.write("<h2>  temp =30 </h2>");
document.write("<h2> temp>= 30  </h2>");
document.write("<h2>its hot outside </h2>");

var username = "antony";
let len = username.length;
console.log(len);
if (len > 8) {
  console.log("Username is too long");
} else {
  console.log(" Username is acceptable.");
}

let mark = 51;

if (mark > 90) {
  console.log("Student got a+");
} else if (mark > 80) {
  console.log("student got A");
} else if (mark > 50) {
  console.log("avg mark");
} else {
  console.log("failed");
}

// let israining = true;
// console.log(typeof israining, Remember to take an umbrella!);

let israining = true;
if (israining) {
  console.log("Remember to take an umbrella!");
} else {
  console.log("No need for an umbrella today");
}

let score = 60;
if (score >= 60) {
  console.log("You passed the exam");
} else {
  console.log("You need to study more.");
}

let numOfBooks = 5;
if (numOfBooks >= 5) {
  console.log("You have a lot of books!");
} else {
  console.log("You need to buy more books.");
}

let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log("num1 is greater than num2.");
} else {
  console.log("num1 is greater than num2.");
}
let isLoggedIn = true;
if (isLoggedIn == true) {
  console.log("You are currently logged in.");
} else {
  console.log("Please log in to access this feature.");
}

let grade = 85;

if (grade > 90) {
  console.log("Grade A+");
} else if (grade > 80) {
  console.log(" B grade");
} else if (grade > 50) {
  console.log("C grade");
} else {
  console.log("failed");
}

let time = 12;
if (time < 12) {
  console.log("good morning");
} else if (time < 18) {
  console.log(" good afternoon");
} else {
  console.log("good evening");
}

let num = 0;
if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// let isLeapYear = 2500;

// if (isLeapYear % 4 == 0) {
//   if (isLeapYear % 100 == 0 ) {
//     if (isLeapYear % 400 == 0) {
//       console.log("Leap Year ");
//     } else {
//       console.log("Not a leap year.");
//     }
//   } else {
//     console.log("Leap  year 130!");
//   }
// } else {
//   console.log("Not a leap year.");
// }
let isLeapYear = 2500;
// let isLeapYear = 5000;

if (isLeapYear % 4 == 0) {
  if (isLeapYear % 100 == 0 && isLeapYear % 400 !== 0) {
    console.log("Not a leap year!");
  } else {
    console.log("Leap Year ");
  }
} else {
  console.log("Not a leap year.");
}

let fruit = "banana";
if (fruit == "apple") {
  console.log("It's an apple!");
} else if (fruit == "banana") {
  console.log("It's a banana!");
} else {
  console.log("It's neither an apple nor a banana.");
}

let agee = 23;
if (agee < 18) {
  console.log("Underage");
} else if (agee >= 18 && agee <= 65) {
  console.log("Adult");
} else {
  console.log("Senior citizen");
}

let numm1 = 10;
let numm2 = 20;
let numm3 = 30;
if (numm1 > numm2 && numm1 > numm3) {
  console.log("num1 is the largest number.");
} else if (numm2 > numm1 && numm2 > numm3) {
  console.log("num2 is the largest number.");
} else {
  console.log("num3 is the largest number.");
}

let numerator = 5;
let denominator = 0;
if (denominator == 0) {
  console.log("not divisiable");
} else {
  console.log("result");
  let res = numerator / denominator;
  console.log(res);
}

let dayOfWeek = 4;
if (dayOfWeek == "0") {
  console.log("sunday");
} else if (dayOfWeek == "1") {
  console.log("Monday");
} else if (dayOfWeek == "2") {
  console.log("Tuesday");
} else if (dayOfWeek == "3") {
  console.log("Wednesday");
} else if (dayOfWeek == "4") {
  console.log("Thusday");
} else if (dayOfWeek == "5") {
  console.log("Friday");
} else if (dayOfWeek == "6") {
  console.log("Saturday");
}

let dayOfWeeks = 5;
switch (dayOfWeeks) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("It's a weekday!");
    break;
  case 6:
  case 7:
    console.log("It's a weekend!");
    break;
  default:
    console.log("Invalid day of the week!");
}

let dayOfWeekS = 3;

switch (dayOfWeeks) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

let fruits = "apple";

switch (fruits) {
  case "apple":
    console.log("It's an apple");
    break;
  case "banana":
    console.log("It's a banana");
    break;
  case "orange":
    console.log("It's an orange");
    break;
  default:
    console.log("Unknown fruit");
}
