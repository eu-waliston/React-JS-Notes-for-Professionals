import React from "react";
import { render } from "react-dom"

//State, Events And Managed Controls

class ManagedContrtolDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ""}
    }

    handleChange(e) {
        this.setState({message: e.target.value})
    }

    render() {
        return(
            <div className="">
                <legend>Type something</legend>
                <input
                    onChange={this.handleChange.bind(this)}
                    value={this.state.message}
                    autoFocus
                />
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}
