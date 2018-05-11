"use strict";

//use arrow function, you can skip using {return x*y*z}
var power = function power(x, y, z) {
  return x * y * z;
};
console.log(power(2, 2, 3));

//get first name
var name = "Ziwei Wu";
//use arrow function to create getFirstName function
var getFirstName = function getFirstName(name) {
  return name.split(" ")[0];
};
var getLastName = function getLastName(name) {
  return name.split(" ")[1];
};

console.log(getFirstName(name));
console.log(getLastName(name));

var add = function add(a, b) {
  return a * b;
};
console.log(add(55, 1));
