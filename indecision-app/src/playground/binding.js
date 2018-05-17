const obj ={
  name: 'vikram',
  getName(){
    return this.name;
  }
};

//const getName = obj.getName //error, function has no context
const getName = obj.getName.bind(obj); //works, bind the context of obj

console.log(getName());
