import React from "react";

// You should not save props into state. It is considered an anti-pattern.
export default class MyComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            days: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            days: e.target.value
        })
    }

    componentWillMount() {
        this.setState({ url: this.props.url })
    }

    render() {
        return (
            <div className="">
                <input defaultValue={2} onChange={this.onChange} />
                URL: {this.props.url + "/days?=" + this.state.days}
            </div>
        )
    }
}