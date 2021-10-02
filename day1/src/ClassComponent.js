import React from "react";

// A class components has its own state and can still use props coming from parent
class CC extends React.Component {
  // Every Class needs a constructor function
  constructor() {
    super(); // Used to call parent cotsructor, think of this as boilerplate code

    // How we declare state, could be anything string/number/boolean.arrays/objects/functions etc
    this.state = {
      text: "Click to change my text",
    };
  }

  handleClick = () => {
    this.setState({ text: "Text is updated by state" });
  };

  render() {
    return (
      <div>
        <h2 style={{ color: this.props.color }}>
          This is a Class/Stateful Component
        </h2>
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}

export default CC;
