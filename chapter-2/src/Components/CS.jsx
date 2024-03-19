import React, { reactCreateClass } from "react";
import ReactBootstrap from "react-bootstrap";

const Button = ReactBootstrap.Button;
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;

const Comment = reactCreateClass({
    getInitialState: function () {
        return { show: false, newItem: '' };
    },

    handleTitleSubmit: function () {
        //code to handle input box submit - for example, issue an ajax request to change name in database
    },

    handleTitleChange: function (e) {
        //code to change the name in form input box. newTitle is initialized as empty string. We need to update it with the string currently entered by user in the form
        this.setState({ newTitle: e.target.value })
    },

    changeComponent: function () {
        // this toggles the show variable which is used for dynamic UI
        this.setState({ show: !this.state.show })
    },

    render: function () {
        let clickableTitle;

        if (this.state.show) {
            clickableTitle = <form inline onSubmit={this.handleTitleSubmit}>
                <FormGroup controlId="formInlineTitle">
                    <FormControl type="text" onChange={this.handleTitleChange} />
                </FormGroup>
            </form>
        } else {
            clickableTitle = <div>
                <Button bsStyle="link" onClick={this.changeComponent}>
                    <h3>Default Text</h3>
                </Button>
            </div>
        }

        return (
            <div className="comment">
                {clickableTitle}
            </div>
        )
    }
})

export default Comment