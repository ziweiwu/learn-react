let nameVar = 'Andrew';
nameVar = 'Andrew';
console.log('nameVar', nameVar)

const fn = () => {
  for (let i = 0; i < 20; i++) {
    console.log(i * 2);
  }
}

fn()

const fullName = 'Ziwei Wu'
function getFirstName(fullName) {
  let firstName = fullName.split(' ')[0];
  return firstName;
}
console.log(getFirstName(fullName));

const user = {
  name :'andrew',
  cities: ['Phil', 'NY'],
  printPlaces(){
    return this.cities.map((city)=>this.name + ' has lived in '+ city);
  }
}

console.log(user.printPlaces());

const multiplier={
  numbers: [10,20,30],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number)=>number*this.multiplyBy);
  }
}

console.log(multiplier.multiply());

