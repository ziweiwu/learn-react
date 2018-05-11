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
