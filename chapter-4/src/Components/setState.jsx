import React from "react";

//Using setState() with an Object as updater

//
// An example ES6 style component, updating the state on a simple button click.
// Also demonstrates where the state can be set directly and where setState should be used.
//

class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
        //Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
            greeting: "Hello!"
        }
    }

    click(e) {
        this.setState({
            greeting: "Hello World!"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.greeting}</p>
                <button onClick={this.click}>Click Me</button>
            </div>
        )
    }
}

//Using setState() with a Function as updater
//
// This is most often used when you want to check or make use
// of previous state before updating any values.
//

this.setState(function(previousState, currentStatre) {
    return {
        counter: previousState.counter + 1
    }
})

//This can be safer than using an object argument where multiple calls to setState() are used, as multiple calls may
//be batched together by React and executed at once, and is the preferred approach when using current props to set
//state.

this.setState({ counter: this.state.counter + 1 });
this.setState({ counter: this.state.counter + 1 });
this.setState({ counter: this.state.counter + 1 });

// Outside of component class, potentially in another file/module

function incrementCounter(previousState, currentState) {
    return {
        counter: previousState.counter + 1
    }
}

//Within component
this.setState(incrementCounter)

//Calling setState() with an Object and a callback function

//
// 'Hi There' will be logged to the console after setState completes
//

this.setState({name: "John Doe"}, console.log("Hi There"))