import React from "react"

class ExampleComponent extends React.Component {
    constructor(props) {
        super(props)

        //Set-up our initial state
        this.state = {
            greeting: "Hiya Buddy!"
        }
    }

    render() {
        //We can access the greeting property through this.styate
        return (
            <div>
                {this.state.greeting}
            </div>
        )
    }
}

export default ExampleComponent