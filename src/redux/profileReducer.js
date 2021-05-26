const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
let initialState = {
    posts: [
        {id: 1, message: "Hello", like: 45},
        {id: 2, message: "First post", like: 12},
        {id: 3, message: "Second post", like: 87}],
    newPostText: "",
    profile: null
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
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state, profile: action.profile
        }
    }
    return state;

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
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export default profileReducer;