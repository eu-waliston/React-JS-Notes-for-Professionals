import React, { Component } from "react";
import { render } from "react-dom";


//class FirstComponent extends Component {
//  render() {
//    return (
//      <div>
//        <h1>Hello, {this.props.name}! I am a First Component.</h1>
//      </div>
//    );
//  }
//}
//
//render(
//  <FirstComponent name={"Waliston"} />,
//  document.getElementById("content")
//);

// Stateless Functional Components
// When using JSX inside a module you must import React
const FirstComponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}! I am a First Component.</h1>
        </div>
    )
}


//arrow components also may have props validation
FirstComponent.protoTypes = {
    //name: PropTypes.string.isRequired
}

// To use FirstComponent in another file it must be exposed through an export call:
export default FirstComponent;