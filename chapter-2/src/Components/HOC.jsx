// Higher order components (HOC) allow to share component functionality.
import React, { Component } from "react";

const PrintHello = (ComposedComponet) =>
  class extends Component {
    onClick() {
      console.log("Hello");
    }
    /* The higher order component takes another component as a parameter
       and then renders it with additional props */

    render() {
      return <ComposedComponet {...this.props} onClick={this.onClick} />;
    }
  };

const FirstComponent = props => (
  <div onClick={props.onClick}>
    Hello, {props.name}! I am a FirstComponent.
  </div>
);

const ExtendedComponent = PrintHello(FirstComponent);