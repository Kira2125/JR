import React, {Component} from "react/cjs/react.production.min";
import MessageService from "../services/MessageService";
import {withRouter} from "react-router";
import axios from "axios";


class CreateMessage extends Component {
    constructor() {
        super();


        this.state = {
            id: null,
            text: ''
        }

        this.changeText = this.changeText.bind(this);
        this.createMessage = this.createMessage.bind(this);
    }




    changeText(event) {
        this.setState({text: event.target.value})
    }

    createMessage = (event) => {
        event.preventDefault();
        let message = {id: null, text: this.state.text}
        MessageService.createMessage(message).then( res => {
            this.props.history.push('/message');
        });
    }


    render() {

        return (
            <form>
                <input type="textarea" name="newtext" placeholder={this.state.text} onChange={(event) => this.changeText(event)}/>
                <button onClick={this.createMessage}>Create</button>
            </form>
        )
    }
}

export default withRouter(CreateMessage);