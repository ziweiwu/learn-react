//react component is a es6 class extends to react component
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ['thing one', 'thing two', 'thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action/>
        <Options options={options}/>
        <AddOptions/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('pick');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.removeAll=this.removeAll.bind(this);
  }

  removeAll() {
    this.props.options = [];
  }

  render() {
    //key is used by react internally to track items, not pass into children component
    const options = this.props.options.map((option) => <Option title={option} key={option}/>);
    console.log(options.length);
    return (
      <div>
        <button onClick={this.removeAll}>Remove all</button>
        <ol>
          {options}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    const id = this.props.title;
    const title = this.props.title;
    return (
      <div>
        <li key={id}>{title}</li>
      </div>
    );
  }
}


class AddOptions extends React.Component {
  onFormSubmit(e) {
   e.preventDefault();
   const option = e.target.elements.option.value.trim(); //trim spaces
    if(option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

//render the IndecisionApp component which wraps all other components
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
