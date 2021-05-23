import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

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