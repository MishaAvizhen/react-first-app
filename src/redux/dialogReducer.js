const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    dialogs: [
        {id: 1, name: "Misha"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Tom"},
        {id: 4, name: "Bob"},
    ],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Bla bla bla"}
    ],
    newMessageText: ""
};

const dialogReducer = (state=initialState, action) => {
    let stateCopy={...state};
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            id: 4,
            message: state.newMessageText
        };
        stateCopy.messages=[...state.messages]
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageText = "";
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        stateCopy.newMessageText = action.messageText;
    }
    return stateCopy;

}
export const sendNewMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: body
    }
}
export default dialogReducer;