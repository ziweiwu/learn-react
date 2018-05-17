//react component is a es6 class extends to react component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      increment: 1,
      error: ''
    };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.handleChangeIncrement = this.handleChangeIncrement.bind(this);
  }

  //this.setState takes a function as argument
  //this is preferred because setState updates asynchronously
  addOne() {
    this.setState(
      (prevState) => {
        return {
          count: prevState.count + this.state.increment
        }
      });
  }

  minusOne() {
    this.setState(
      (prevState) => {
        return {
          count: prevState.count - this.state.increment
        }
      })
  }

  reset() {
    this.setState(
      () => {
        return {
          count: 0
        }
      })
  }

  handleChangeIncrement(e) {
    e.preventDefault();
    const increment = e.target.elements.increment.value;
    const num = Number(increment);
    if (num < 1) {
      this.setState(() => {
        return {
          error: 'Increment must be greater than 1'
        }
      });
    }

    const error = this.state.error;
    this.setState(() => {
      return {
        increment: num
      }
    });
    //clear the input field
    if(!error){
      e.target.elements.increment.value = '';
    }
  }

  componentDidMount() {
    try {
      const count_json = localStorage.getItem('count');
      const increment_json = localStorage.getItem('increment');
      const count = JSON.parse(count_json);
      const increment = JSON.parse(increment_json);
      // isNaN checks if the number is valid
      if (!isNaN(count) || !isNaN(increment)) {
        this.setState(() => ({
          count: count,
          increment: increment
        }))
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count ||
      prevState.increment !== this.state.increment) {
      const count = JSON.stringify(this.state.count);
      const increment = JSON.stringify(this.state.increment);
      localStorage.setItem('count', count);
      localStorage.setItem('increment', increment);
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+{this.state.increment}</button>
        <button onClick={this.minusOne}>-{this.state.increment}</button>
        <button onClick={this.reset}>reset</button>
        <form onSubmit={this.handleChangeIncrement}>
          <input type="number" name="increment"/>
          <button>Change Increment</button>
        </form>
        {this.state.error && <p>Error:{this.state.error}</p>}
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
  increment: 1,
};

//render the IndecisionApp component which wraps all other components
ReactDOM.render(<Counter/>, document.getElementById('app'));
