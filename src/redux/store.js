import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", like: 45},
                {id: 2, message: "First post", like: 12},
                {id: 3, message: "Second post", like: 87}],
            newPostText: ""
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log(" rerender")
    },
    subscribe(observe) {
        this._callSubscribe = observe;
    },

    dispatcher(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._callSubscribe(this._state);

    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        newText: text
    }
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

export default store;