import React from "react";

import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";

    const mapStateToProps = (state) => {

        return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            addPosts: () => {
                dispatch(addPostActionCreator())
            },
            updateNewPostText: (text) => {
                let action = updateNewPostActionCreator(text);
                dispatch(action);
            }

        }
    }

    const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

    export default MyPostContainer;