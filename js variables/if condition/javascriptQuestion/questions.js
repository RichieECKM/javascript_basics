// *Task 1: Simple if Statement*

// 1. Store a number in a variable.
// 2. Write an if statement that checks if the number is positive.
// 3. Display a message indicating whether the number is positive.

function numb(num) {
  if (num > 0) {
    console.log("Positive number");
    return true;
  }
  return false;
}

let output = numb(35);
if (output) {
  console.log("number is positive");
} else {
  console.log("nuber is not positive ");
}

// *Task 2: if and else Statement*

// 1. Store a number in a variable.
// 2. Write an if-else statement to check if the number is even or odd.
// 3. Display a message indicating whether the number is even or odd.

function nump(num) {
  if (num % 2 == 0) {
    console.log("number is even");
    return true;
  }
  return false;
}
let outputs = nump(40);
if (outputs) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

// *Task 3: else if Statement*

// 1. Store a number in a variable.
// 2. Write an if-else if-else statement to check if the number is positive, negative, or zero.
// 3. Display a message indicating whether the number is positive, negative, or zero.

function checkNumber(num) {
  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }
}
checkNumber(10);

// *Task 4: Logical AND Operator*

// 1. Store a number in a variable.
// 2. Write an if statement using the AND operator to check if the number is between 10 and 20.
// 3. Display a message indicating whether the number is between 10 and 20.

function andOperations(num) {
  if (num >= 10 && num <= 20) {
    console.log("True");
  } else {
    console.log("False");
  }
}
andOperations(15);

// *Task 5: Logical OR Operator*

// 1. Store a number in a variable.
// 2. Write an if statement using the OR operator to check if the number is less than 10 or greater than 20.
// 3. Display a message indicating whether the number is less than 10 or greater than 20.

function orOperator(num) {
  if (num <= 10 || num >= 20) {
    console.log("True");
  } else {
    console.log("False");
  }
}
orOperator(18);

// *Task 6: Logical NOT Operator*

// 1. Store a number in a variable.
// 2. Write an if statement using the NOT operator to check if the number is not equal to 10.
// 3. Display a message indicating whether the number is not equal to 10.

function notOperator(num) {
  if (num != 10) {
    console.log("not equal");
  } else {
    console.log("equal");
  }
}
notOperator(9);

// *Task 7: Combined Logical Operators*

// 1. Store a number in a variable.
// 2. Write an if statement using AND and NOT operators to check if the number is between 10 and 20 but not equal to 15.
// 3. Display a message indicating whether the number is between 10 and 20 but not equal to 15.

function allOperator(num){
    if(num >= 10 && num <= 20 && num !=15){
        console.log("its true")
    }
    else{
        console.log("its false")
    }

}
allOperator(12)
