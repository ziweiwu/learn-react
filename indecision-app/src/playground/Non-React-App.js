console.log('App.js is running!');
const appRoot = document.getElementById('app');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: [],
  choice: []
};

//form submission
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  console.log(option);
  console.log(app.options);
  app.options.push(option);
  if (option) {
    console.log(app.options);
    e.target.elements.option.value = '';
    renderPage();
  }
};

//remove all options
const removeAll = () => {
  app.options = [];
  renderPage();
};

//generate list
const buildList = () => {
  return (app.options.map((option) =>
    <li key={option}>{option}</li>));
};

//make random choice
const onMakeDecision = () => {
  const randNum = Math.floor(Math.random() * app.options.length);
  const choice = app.options[randNum];
  app.choice = [];
  app.choice.push(choice);
  renderPage()
};


//render the page
const renderPage = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are you options' : 'No options'}</p>
      {app.options.length > 0 && <button onClick={onMakeDecision}>What should I do?</button>}
      {app.options.length > 0 && <p>choice: {app.choice}</p>}
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {buildList()}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

//render initial page
renderPage();

