import axios from "axios";

const MESSAGE_API_URL = "http://localhost:8080/message";

class MessageService {
    getMessages() {
        return axios.get(MESSAGE_API_URL);
    }

    deleteMessage(messageId) {
        return axios.delete(MESSAGE_API_URL + '/' + messageId);
    }

    getOneMessage(messageId) {
        return axios.get(MESSAGE_API_URL + '/' + messageId);
    }

    updateMessage(message,messageId) {
        return axios.patch(MESSAGE_API_URL + '/' + messageId, message);
    }

    createMessage(message) {
        return axios.post(MESSAGE_API_URL, message);
    }
}

export default new MessageService();