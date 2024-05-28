
let i=10;
while(i<=100){
console.log(i);
i++;
}


let x = 50;
while (x <= 80) {
if(x%2==0) {
console.log(i);
}
x++;
}


let number=101; 
while(number<=250){
console.log(number);
number+= 2; 
}

let sum = 0;
let numbers = 1;
while(numbers<=10) {
sum+=numbers;
numbers++;
}
console.log("The sum of numbers from 1 to 10 is:", sum);

let product = 1;
let num = 1;
while(num<=20) {
product*=num;
num++;
}
console.log("The product of numbers from 1 to 10 is:", product);

function fizzBuzz(limit) {
 let i = 1;
 while (i <= limit) {
 if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz");
 } else if (i % 3 === 0) {
console.log("Fizz");
} else if (i % 5 === 0) {
console.log("Buzz");
 } else {
console.log(i);
}
i++;
}
}
fizzBuzz(15);


// def reverse_number(num):
//     reversed_num = 0
//     while num > 0:
//         digit = num % 10  # Extract the last digit
//         reversed_num = reversed_num * 10 + digit  # Append the digit to reversed_num
//         num //= 10  # Remove the last digit
//     return reversed_num

// def reverse_number(num):
//     reverse = 0
    
//     while num > 0:
//         remainder = num % 10
//         reverse = (reverse * 10) + remainder
//         num = num // 10
    
//     return reverse

// # Example usage:
// num = 12345
// reversed_num = reverse_number(num)
// print("Reverse of", num, "is:", reversed_num)
