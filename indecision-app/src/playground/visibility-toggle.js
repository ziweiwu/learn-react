console.log('App.js is running!');
const appRoot = document.getElementById('app');

const Toggle = {
  title: 'Visibility Toggle',
  hide: true,
}

const toggleSwitch = () => {
  Toggle.hide = !Toggle.hide;
  renderPage();
};

//render the page
const renderPage = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleSwitch}>
        {Toggle.hide ? 'Show details' : 'Hide details'}
      </button>
      {!Toggle.hide  &&
      <p>This is some detail</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

//render initial page
renderPage();
