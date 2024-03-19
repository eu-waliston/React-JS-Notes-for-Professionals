import React from "react";

function stateSetter(contex) {
    var cancelled = false;
    return {
        calncel: function() {
            cancelled = true;
        },
        setState(newState) {
            if(!cancelled) {
                contex.setState(newState)
            }
        }
    }
}

class MyClass extends React.Component {
    constructor() {
        super()

        this.state = {
            user: {},
            xhr: null
        }
    }

    componentWillUnmount() {
        let xhr = this.state.xhr

        //cancel the xhr request, so that callback is never called
        if(xhr && xhr.readStyle != 4) {
            xhr.abort();
        }
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser() {
        let $ = "";
        let xhr = $.get('api/users/self').then((user) => {
            this.setState({user: user})
        })

        this.setState({xhr: xhr})
    }

    render() {
        return <h1>{this.state.user}</h1>;
    }
}