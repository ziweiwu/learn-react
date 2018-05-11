console.log('App.js is running!');

var app = {
  title: 'Great app',
  subtitle: 'This is a great app'
}

var user1 = {
  name: 'ziwei',
}

var user2 = {
  name: 'John Doe',
  location: 'Toronto',
  favoriteFood:'Italian',
  options: ['One', 'Two']
}

function getLocation(location) {
  //tertiary operator
  //state return if true : if false
  return location? location :'unknown';
}

var template2 = (
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
      &&<p>favorite food: {user1.favoriteFood}</p> }
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
      &&<p>favorite food: {user2.favoriteFood}</p> }
    </div>
  </div>
)

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);