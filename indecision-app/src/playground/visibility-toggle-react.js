//react component is a es6 class extends to react component
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Visibility Toggle',
      content: props.content,
      hide: true,
      showMsg: 'show content',
      hideMsg: 'hide content'
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(
      (prevState) => {
        return {
          hide: !prevState.hide
        }
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.hide ? this.state.showMsg : this.state.hideMsg}
        </button>
        {!this.state.hide && <p>{this.state.content}</p>}
      </div>
    );
  }
}

const content = 'this is some content';
//render the IndecisionApp component which wraps all other components
ReactDOM.render(<VisibilityToggle content={content}/>, document.getElementById('app'));
