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
    _updateNewPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state);
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 47
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscribe(this._state);
    },
    _updateNewMessageText(messageText) {
        this._state.dialogsPage.newMessageText = messageText;
        this._callSubscribe(this._state);
    },
    _sendNewMessageText() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText="";

        this._callSubscribe(this._state);
    },
    dispatcher(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST) {
            this._updateNewPost(action.newText)

        } else if (action.type === SEND_MESSAGE) {
            this._sendNewMessageText()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.messageText)
        }
    },
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