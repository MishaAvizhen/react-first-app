const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";

let initialState = {
    posts: [
        {id: 1, message: "Hello", like: 45},
        {id: 2, message: "First post", like: 12},
        {id: 3, message: "Second post", like: 87}],
    newPostText: ""
};
const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            like: 22
        };

        stateCopy.posts = [...state.posts];
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = "";

    } else if (action.type === UPDATE_NEW_POST) {
        stateCopy.newPostText = action.newText;
    }
    return stateCopy;

}
export default profileReducer;