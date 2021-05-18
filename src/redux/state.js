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
                {message: "Hello"},
                {message: "How are you?"},
                {message: "Bla bla bla"},
            ]
        }
    },

    getState() {
        return this._state;
    },
    _callSubscribe() {
        console.log(" rerender")
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 47
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscribe(this._state);
    },
    updateNewPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state);
    },
    subscribe(observe) {
        this._callSubscribe = observe;
    }
}

export default store;