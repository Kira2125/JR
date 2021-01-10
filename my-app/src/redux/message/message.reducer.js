let initialState = {
    messageId: '',
    text: '',
};

const messageReducer = (state = initialState, action) => {
    if(action.type === 'addMessage') {
        let newMessage = {
            message: state.newMessageText,
        }
        state.messageDate.push(newMessage);
        state.newMessageText = "";
    } else if(action.type === 'updateMessage') {
        state.newMessageText = action.mesText;
    }
    return state;
}

export const actionAddMessage = () => {
    return {
        type: "addMessage",
    }
}

export const actionUpdateMessage = (text) => {
    return {
        type: "updateMessage",
        mesText: text,
    }
}

export default messageReducer;