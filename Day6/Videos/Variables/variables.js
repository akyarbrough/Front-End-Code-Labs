//var, let, const
var x; //came before ES6, the old way of declaring variables
let y; //modern way ES6 of declaring variables
const z = 10; 

 //cannot reassign values to constant variables;
console.log("x: ", x);
console.log("y: ", y);
console.log("z: ", z);

x = 1;
y = 2;

console.log("x: ", x);
console.log("y: ", y);
console.log("z: ", z);

var x; //you can redeclare x
let x; //already states that it has been declared and will not let you redeclare it

//let abc some dog;  cannot do this because JS thinks that some is the variable and doesn't recognize dog; use camelCase someDog