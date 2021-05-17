import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", like: 45},
            {id: 2, message: "First post", like: 12},
            {id: 3, message: "Second post", like: 87}]
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
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 47
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);

}

export default state;