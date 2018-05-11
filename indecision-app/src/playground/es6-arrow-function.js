//use arrow function, you can skip using {return x*y*z}
const power = (x, y, z) => x * y * z;
console.log(power(2, 2, 3));

//get first name
const name = "Ziwei Wu";
//use arrow function to create getFirstName function
const getFirstName = (name)=>name.split(" ")[0];
const getLastName = (name)=>name.split(" ")[1];

console.log(getFirstName(name));
console.log(getLastName(name));

const add = function (a,b) {
  return a*b;
}
console.log(add(55,1));

