import style from './MyPosts.module.css';
import Post from './post/Post';
import React from "react";

const MyPosts = (props) => {


    let postElement =
        props.posts.map(p => {
            return <Post message={p.message} like={p.like}/>
        });

    let newPostElement = React.createRef();

    let addPostElement = () => {
        debugger;
        props.addPost();

    }
    let onChangePost = () => {
        let updateText = newPostElement.current.value;
        props.updateNewPost(updateText)

    }
    return (
        <div className={style.item}>
            <h3> My Post</h3>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={addPostElement}> Add post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>

    );
}

export default MyPosts;