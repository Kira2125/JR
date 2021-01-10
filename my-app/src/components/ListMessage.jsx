import React, {Component} from "react/cjs/react.production.min";
import MessageService from "../services/MessageService";
import {withRouter} from "react-router";


class ListMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            newText: ''
        }
        this.getOneMessage = this.getOneMessage.bind(this)
        this.createMessage = this.createMessage.bind(this)
    }

    componentDidMount() {
        MessageService.getMessages().then((res) => {
            this.setState({
                messages: res.data
            })
        })
    }

    deleteMessage(id) {
        MessageService.deleteMessage(id).then((res) => {
            this.setState({ messages: this.state.messages.filter(message => message.id !== id)})
        })
    }

    getOneMessage(id) {
        this.props.history.push(`/message/${id}`);
    }

    createMessage = (event) => {
        event.preventDefault();
        let message = {id: null, text: this.state.newText}
        MessageService.createMessage(message).then( res => {
            MessageService.getMessages().then((res) => {
                this.setState({
                    messages: res.data
                })
            })
        });
    }

    getText(event) {
        this.setState({newText: event.target.value})
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Messages</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Message ID</th>
                                <th>Message text</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.messages.map(message =>
                            <tr key = {message.id}>
                                <td>{message.id}</td>
                                <td>{message.text}</td>
                                <td><button className="btn btn-info" onClick={() => this.getOneMessage(message.id)}>UPDATE</button></td>
                                <td><button className="btn btn-danger" onClick={() => this.deleteMessage(message.id)}>DELETE</button></td>
                            </tr>)
                        }
                        </tbody>
                    </table>
                    <form>
                        <input type="textarea" name="text"  onChange={(event) => this.getText(event)}/>
                        <button onClick={this.createMessage}>Create</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(ListMessage);