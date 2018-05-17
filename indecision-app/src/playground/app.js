//react component is a es6 class extends to react component
//default props
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      options: props.options,
      chosenOption: '',
    };
    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
  }

  handleRemoveOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleRemoveOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }


  handlePickOption() {
    this.setState((prevState) => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = prevState.options[randomNum];
      return {
        chosenOption: option
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item';
    } else if (this.state.options.indexOf(option) !== -1) {
      return 'Please enter a new value';
    }
    this.setState((prevState) => {
      const prevOptions = prevState.options;
      prevOptions.push(option);
      return {
        options: prevOptions
      }
    });
  }

  componentDidMount()
  {
    //set up persist storage for react app
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(()=>({options:options}))
      }
    }catch(e){
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState)
  {
    //update the local storage if data is changed
    if(prevState.options !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      console.log('saving data');
      console.log(json);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(){
    console.log('Component did unmount');
  }

  render() {
    return (
      <div>
        <Header/>
        <Action
          hasOptions={this.state.options.length > 0}
          chosenOption={this.state.chosenOption}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleRemoveOptions={this.handleRemoveOptions}
          handleRemoveOption={this.handleRemoveOption}
          hasOptions={this.state.options.length > 0}
        />
        <AddOptions
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

//default props should be placed after the class or functional component
IndecisionApp.defaultProps = {
  options: ['default 1', 'default 2', 'default 3']
}

//Header being a functional component
const Header = (props) => {
  return (
    <div>
      <h1> {props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision',
  subtitle: 'Let computer decide what to do',
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
      <h3>You should do: {props.chosenOption}</h3>
    </div>

  )
};


const Options = (props) => {
  const options = props.options.map((option) =>
    <Option title={option} key={option} handleRemoveOption={props.handleRemoveOption}/>);
  return (
    <div>
      {props.options.length===0 &&
      <p>Please add some options to get started</p>
      }
      <button
        onClick={props.handleRemoveOptions}
        disabled={!props.hasOptions}
      >
        Remove all
      </button>
      <ul>
        {options}
      </ul>
    </div>
  )
}


const Option = (props) => {
  return (
    <div>
      <li key={props.id}>{props.title}
        <button onClick={(e) => {
          props.handleRemoveOption(props.title);
        }}>
          remove
        </button>
      </li>
    </div>
  )
}


class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {error: error}
    });
    //clear the input field
    if(!error){
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        {this.state.error && <p>error: {this.state.error}</p>}
      </div>
    );
  }
}

//render the IndecisionApp component which wraps all other components
ReactDOM.render(<IndecisionApp options={['props1', 'props2']}/>, document.getElementById('app'));
