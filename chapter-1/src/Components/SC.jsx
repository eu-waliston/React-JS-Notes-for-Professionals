//In contrast to the 'stateless' components shown above, 'stateful'
//components have a state object that can be
//updated with the setState method. The state
//must be initialized in the constructor before it can be set:

import React, { Component } from "react";

class SecondComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };

    //this is to bind context when passing onClick as a callback
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState, props) => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div onClick={this.onClick}>
        <h1>Hello, {this.props.name}! I am a SecondComponent</h1>
        <br />
        <h1>Toggle is: {this.state.toggle}</h1>
      </div>
    );
  }
}
