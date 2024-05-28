// for (var i = 10; i <= 100; i++) {
//   console.log(i);
// }

// for (var i = 50; i <= 80; i += 2) {
//   console.log(i);
// }
// for (var i = 100; i <= 250; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

for (let x = 0; x < 50; x++) {
    console.log(x)
    if (x === 10) {
        break;
    }
}

// for (let x = 0; x < 35; x++) {
//     console.log(x)
//     if (x === 15) {
//         break;
//     }
// }

// for( let x=100; x>=10; x--){
//     console.log(x)
//     document.write(x+"</br>")
// }


let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}
console.log("The sum of numbers from 1 to 10 is:", sum);

let product = 1;
for (let i = 1; i <= 20; i++) {
  product *= i;
}
console.log("The product of numbers from 1 to 20 is:", product);


// for (let i = 20; i <= 150; i++) {
//     if(i%3==0){
//         console.log(i)
//     }
// }


function findFactors(number) {
  let factors = [];
  for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
          factors.push(i);
      }
  }
  return factors;
}
let number = 20;
console.log("Factors of", number, "are:", findFactors(number));







