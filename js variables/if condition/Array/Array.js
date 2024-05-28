var emp = new Array();
emp[0] = "Antony";
emp[1] = "Eugene";
emp[2] = "Kottayam";
console.log(emp);
//concat()
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

//indexOf()
const animal = ["ant", "bison", "camel", "duck", "bison"];
console.log(animal.indexOf("bison"));
console.log(animal.indexOf("camel"));

//pop()

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());

//push

const animals = ["pigs", "goats", "sheep"];
console.log(animals);
const count = animals.push("cows");
console.log(count);
console.log(animals);

//reverse

const num = ["one", "two", "three"];
console.log("num:", num);
const reversed = num.reverse();
console.log("reversed:", reversed);

//slice
const cars = ["bmw", "benz", "honda", "porshe", "ford"];
console.log(cars.slice(2));
console.log(cars.slice(2, 4));
console.log(cars.slice(1, 5));

//sort
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

//array using loop

let arr = ["apple", "orange", "grape"];
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}

let oddNumbers = [];
let start = 1;
let end = 200;
for (let num = start; num <=end; num++) {
  if (num % 2 !== 0) {
      console.log(num);
      oddNumbers.push(num)

  }
}
console.log(oddNumbers)


//objects 

 var person = {name:"Antony" , age:23 , place :"tvm"}
console.log(person.name , person.age)

///creating new objects 

var persons = new Object()
persons.id=100;
persons.name="aby";
console.log(persons.id,persons.name)

//constructor
// using this.
//delete operator

function empp(id, name, salary){
  this.id=id;
  this.name=name;
  this.salary=salary;
}
data=new empp(10,"jhon",20000)
delete data.id // delete operator
console.log(data.id,data.name,data.salary)


// let user =  {
//   "First Name":"john",
//   age:45,
//   isAdmin:true
// };
// for (let key in user){
//   console.log(key,"user loop");
//  alert(user[key],"jj");
// console.log(user)
// }


const array8 = ["a", "b", "c"];
const array9 = ["d", "e", "f"];
const array4 = array8.concat(array9);//concat
console.log(array4,"fullArray");

const ani = ["ant", "bison", "camel", "duck", "bison"];
console.log(ani.indexOf("bison"));
console.log(ani.indexOf("camel"));//indexOf

const car = ["car1", "car2", "car3", "car4", "car5"];
console.log(car.pop());//pop

const alph = ["z", "x", "c"];
console.log(alph);
const counts = alph.push("bbb"); //push
console.log(counts);
console.log(alph);

const num1 = ["one", "two", "three","four"];
console.log("num:", num1);
const rev = num1.reverse();
console.log("reversed:", rev); //reverse

const carss = ["bmw", "benz", "honda", "porshe", "ford"];
console.log(carss.slice(2));
console.log(carss.slice(2, 4));
console.log(carss.slice(1, 5)); //slice


const month = ["March", "Jan", "Feb", "Dec"];
month.sort();
console.log(month); //sort








