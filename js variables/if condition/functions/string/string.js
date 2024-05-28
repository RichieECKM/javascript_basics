const age = 222;
let x = "hello";
let num = x.charAt(0);
const myN = "anand";
console.log("2nd char", myN.charAt(3));
console.log("num", num);
let nameAndAge = `helo my age ${age}`;
console.log(nameAndAge);

let firstName = "abc";
let lastName = "def";
let fullName = firstName.concat(lastName);
console.log("full", fullName);

let firstNo = "234";
let lastNo = "567";
let fullNo = firstNo.concat(lastNo);
console.log("full", fullNo);

let fruit = "apple";
let pChar = fruit.indexOf("p");
console.log("pChar", pChar);

let car = "Honda";
let pCar = car.indexOf("n");
console.log("pCar", pCar);

let mystr = "sdfghjk";
console.log("str length", mystr.length);
let mystrIndex = mystr.indexOf("sdfghjk");
console.log("mystrInd", mystrIndex);

var s1 = "JavaScript toLowerCase";
var s2 = s1.toLowerCase();
console.log(s2);

var s1 = " abcdefgh";
var s2 = s1.slice(2, 5);
console.log(s2);

var s1 = " javascript trim";
var s2 = s1.trim();
console.log(s2);

var str = "This is Javascript example";
console.log(str.split(""));

var str = "JavaScript";
console.log(str.substr(0, 4));
