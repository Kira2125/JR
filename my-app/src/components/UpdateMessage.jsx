import React, {Component} from "react/cjs/react.production.min";
import MessageService from "../services/MessageService";
import {withRouter} from "react-router";
import axios from "axios";


class UpdateMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            text: ''
        }

        this.changeText = this.changeText.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    componentDidMount() {
        MessageService.getOneMessage(this.state.id).then((res) => {
            this.setState({text: res.data.text})
        })
    }

    changeText(event) {
        this.setState({text: event.target.value})
    }

    updateMessage = (event) => {
        event.preventDefault();
        let message = {id: this.state.id, text: this.state.text}
        MessageService.updateMessage(message, this.state.id).then( res => {
            this.props.history.push('/message');
        });
    }


    render() {
        console.log(this.state)
        return (
            <form>
                <input type="textarea" name="text" placeholder={this.state.text} onChange={(event) => this.changeText(event)}/>
                <button onClick={this.updateMessage}>Edit</button>
            </form>
        )
    }
}

export default withRouter(UpdateMessage);