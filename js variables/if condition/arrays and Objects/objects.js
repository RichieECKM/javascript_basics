// objects literal
let student = {
  name: "Antony",
  age: 23,
  haveLicense: true,
};
// ---------------------------------------------------
console.log(student.name);
let car = {
  brand: "BMW",
  BHP: 540,
  haveRegister: false,
};
console.log(car.BHP);
// -----------------------------------------------------

// creating instance of a objects

let object = new Object();
object.ant = 67;
console.log("animal", object.ant);
//===============================================================

//object constructor

function Cars(engineId, colorCode) {
  this.engineId = engineId;
  this.colorCode = colorCode;
}
let BMW = new Cars("KJUH4556766877G778 ", "RED");
console.log(BMW.engineId, BMW.colorCode);
//=========================================================================

//creating an empty array push all the even numbers 1-100
//creAT ANOTHER LOOP AND PRINT ALL THE EVEN NUMBERS THAT WE STORE ON THE ARRAY
//====================================================================================