function add() {
  var num1 = 15;
  var num2 = 20;
  var output = num1 + num2; //local scope
  console.log("add", output);
}
add();
// read same text if it is cap or small but differnt elements
let time = 5;
let Time = 10;
console.log(time);
console.log(Time);
//if the text is same it will read last text we were written
var age = 5;
console.log(age);
console.log(age);
//
document.write("myName"); //text in html page (output)
//arthmetic Operation
//addition
let class1 = 20;
let class2 = 30;
console.log(class1 + class2);
document.write("<h2> addtion </h2>");
document.write("<h2> 5 + 2 = </h2>", class1 + class2);

//substration
let name1 = 20;
let name2 = 30;
console.log(name1 - name2);
document.write("<h2> substration </h2>");
document.write("<h2> 20 - 30 = </h2>", name1 - name2);
//multiplication
let class3 = 20;
let class4 = 30;
console.log(class3 * class4);
document.write("<h2> multiplication </h2>");
document.write("<h2> 20 * 30 = </h2>", class3 * class4);
//divition
let class5 = 20;
let class6 = 30;
console.log(class5 / class6);
document.write("<h2> divition </h2>");
document.write("<h2> 20 / 30 = </h2>", class5 / class6);
//modules
let class10 = 20;
let class20 = 30;
console.log(class10 % class20);
document.write("<h2> modules </h2>");
document.write("<h2> 10 + 20 = </h2>", class1 + class2);
//increment
let class11 = 20;

console.log(class11++); //pre increment
console.log(class11);
let class21 = 20;

console.log(++class21); //post increment
//decrement
let class31 = 20;
console.log(--class31);

document.write("<h1> Operations </h1>");
let class60 = 20;
let class70 = 30;
console.log(class60 == class70);
document.write("<h2> is equal to </h2>");
document.write("<h2> 10 == 20 = </h2>", class60 == class70);

let class80 = 20;
let class90 = 30;
console.log(class80 == class90);
document.write("<h2> identical (equal and of same type ) </h2>");
document.write("<h2> 10 === 20 = </h2>", class80 === class90);

let class82 = 20;
let class93 = 30;
console.log(class82 != class93);
document.write("<h2> not eqal to  </h2>");
document.write("<h2> 10 != 20 = </h2>", class82 != class93);

let class72 = 20;
let class73 = 20;
console.log(class72 !== class73);
document.write("<h2> not identical  </h2>");
document.write("<h2> 20 !== 20 = </h2>", class72 !== class73);

let class62 = 20;
let class63 = 30;
console.log(class62 > class63);
document.write("<h2> Greater than  </h2>");
document.write("<h2> 10 > 20 = </h2>", class62 > class63);

let class52 = 20;
let class53 = 30;
console.log(class52 >= class53);
document.write("<h2> Greater than or equal to </h2>");
document.write("<h2> 10 >= 20 = </h2>", class52 != class53);

let class42 = 20;
let class43 = 30;
console.log(class42 < class43);
document.write("<h2> Less than  </h2>");
document.write("<h2> 10 < 20 = </h2>", class42 < class43);

let class33 = 20;
let class32 = 30;
console.log(class32 <= class33);
document.write("<h2> Less than or equal to  </h2>");
document.write("<h2> 10 <= 20 = </h2>", class33 <= class32);

document.write("<h1> Assignment Operator</h1>");

let class03 = 20;
let class02 = 10;
console.log((class03 = class03));
document.write("<h2>  Assign </h2>");
document.write("<h2> 10 = 20  </h2>", (class03 = class02));

let class04 = 20;
let class05 = 30;
console.log((class04 += class05));
document.write("<h2>  Add and Assign  </h2>");
document.write("<h2> 10 += 20  </h2>", (class04 += class05));

let class06 = 20;
let class07 = 10;
console.log((class06 -= class07));
document.write("<h2>  Substract and Assign </h2>");
document.write("<h2> 10 -= 20  </h2>", (class06 -= class07));

let class011 = 20;
let class010 = 10;
console.log((class011 *= class010));
document.write("<h2>  Multiply and Assign </h2>");
document.write("<h2> 10 *= 20  </h2>", (class011 *= class010));

let class09 = 20;
let class01 = 10;
console.log((class09 /= class01));
document.write("<h2>  divide and Assign </h2>");
document.write("<h2> 10 /= 20  </h2>", (class09 /= class01));

let class001 = 20;
let class070 = 10;
console.log((class001 %= class070));
document.write("<h2>  Modulus and Assign </h2>");
document.write("<h2> 10 %= 20  </h2>", (class001 %= class070));

let class098 = true;
let class076 = false;
console.log(class098 && class076);
console.log(class098 || class076);
console.log(!(class098 && class076));
{/* <h1>
    convertions
</h1> */}
