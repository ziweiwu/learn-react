import React from 'react';
import AddOptions from './AddOptions'
import Action from './Action'
import Options from './Options'
import Header from './Header'
import OptionModal from './OptionModal'

//react component is a es6 class extends to react component
//default props
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      options: props.options,
      chosenOption: undefined,
    };
    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
  };

  handleClearSelectedOption(){
    this.setState(()=>{
      return{
        chosenOption: undefined
      }
    })
  };

  handleRemoveOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handleRemoveOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  };


  handlePickOption() {
    this.setState((prevState) => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = prevState.options[randomNum];
      return {
        chosenOption: option
      };
    });
  };


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

  componentDidMount() {
    //set up persist storage for react app
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options: options}));
        console.log(this.state.chosenOption)
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //update the local storage if data is changed
    console.log(this.state.chosenOption);
    if (prevState.options !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      console.log('saving data');
      console.log(json);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
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
        <OptionModal
          chosenOption = {this.state.chosenOption}
          handleClearSelectedOption = {this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

//default props should be placed after the class or functional component
IndecisionApp.defaultProps = {
  options: ['default 1', 'default 2', 'default 3']
};

export default IndecisionApp

