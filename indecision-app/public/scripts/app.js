'use strict';

console.log('App.js is running!');

var app = {
  title: 'Great app',
  subtitle: 'This is a great app'
};

var user1 = {
  name: 'ziwei'
};

var user2 = {
  name: 'John Doe',
  location: 'Toronto',
  favoriteFood: 'Italian',
  options: ['One', 'Two']
};

function getLocation(location) {
  //tertiary operator
  //state return if true : if false
  return location ? location : 'unknown';
}

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'h2',
    null,
    app.subtitle
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'name: ',
      user1.name.toUpperCase()
    ),
    React.createElement(
      'p',
      null,
      'location: ',
      getLocation(user1.location)
    ),
    user1.favoriteFood && React.createElement(
      'p',
      null,
      'favorite food: ',
      user1.favoriteFood
    )
  ),
  React.createElement('hr', null),
  React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'name: ',
      user2.name.toUpperCase()
    ),
    React.createElement(
      'p',
      null,
      'location: ',
      getLocation(user2.location)
    ),
    user2.favoriteFood && React.createElement(
      'p',
      null,
      'favorite food: ',
      user2.favoriteFood
    )
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
