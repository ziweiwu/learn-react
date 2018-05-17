console.log('App.js is running!');

const appRoot = document.getElementById('app');

const app = {
  title: 'Great app',
  subtitle: 'This is a great app'
}

const user1 = {
  name: 'ziwei',
}

const user2 = {
  name: 'John Doe',
  location: 'Toronto',
  favoriteFood: 'Italian',
  options: ['One', 'Two']
}


function getLocation(location) {
  //tertiary operator
  //state return if true : if false
  return location ? location : 'unknown';
}

const template = (
  <div>
    <h1>
      {app.title}
    </h1>
    <h2>
      {app.subtitle}
    </h2>
    <div>
      <p>
        name: {user1.name.toUpperCase()}
      </p>
      <p>
        location: {getLocation(user1.location)}
      </p>
      {user1.favoriteFood
      && <p>favorite food: {user1.favoriteFood}</p>}
    </div>
    <hr/>
    <div>
      <p>
        name: {user2.name.toUpperCase()}
      </p>
      <p>
        location: {getLocation(user2.location)}
      </p>
      {user2.favoriteFood
      && <p>favorite food: {user2.favoriteFood}</p>}
    </div>
  </div>
)

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}

const minusOne = () => {
  count--;
  renderCounterApp();
}

const reset = () => {
  count=0;
  renderCounterApp();
}

const renderCounterApp=()=>{
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id="addone" className="button" onClick={addOne}>Add one</button>
      <button id="minusone" className="button" onClick={minusOne}>Minus one</button>
      <button id="reset" className="button" onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();


