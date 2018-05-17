class Person{
  constructor(name = 'John Doe', location = 'Unknown'){
    this.name = name ;
    this.location = location;
  }
  greet(){
    //inject variable into a string
    return `${this.name} says hello.`
  }
}


//composition with extends
class Student extends Person{
  constructor(name, major){
    super(name); //calll parent to get defaults
    this.major = major
  }
  greet(){
    let greet = `${super.greet()} and other things ${this.hasMajor()}`;
    return greet;
  }

  hasMajor(){
    if(!!this.major){ // !! return bool for undefined
      return `student has major in ${this.major}`
    }else{
      return `student has no major`
    }
  }
}

class Traveler extends Person {
  constructor(name,homeLocation){
    super(name); //calll parent to get defaults
    this.homeLocation = homeLocation ;
  }

  hasHomeLocation(){
    if(!! this.homeLocation){
      return this.homeLocation;
    }else{
      return `has no home location.`
    }
  }
  greet(){
   return `${super.greet()} and home location is ${this.hasHomeLocation()}`
  }
}


const me = new Student('ziwei', 'toronto', 'cs');
const you = new Student();
const him = new Traveler('Lisa');
const her = new Traveler('Lu', 'toronto');
console.log(me.greet());
console.log(you.greet());
console.log(him.greet());
console.log(her.greet());
