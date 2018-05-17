//import a functioon from another file
import fn,{add, multiply} from '../utils'
import validator from 'validator'



console.log('app.js is running!');

console.log(add(1,2));
console.log(multiply(1,2));
console.log(fn(100,1));

console.log(validator.isEmail('ziwei@gmail.com'));
console.log(validator.isEmail('test'));
