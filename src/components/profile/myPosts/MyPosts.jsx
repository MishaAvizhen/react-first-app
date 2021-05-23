import style from './MyPosts.module.css';
import Post from './post/Post';
import React from "react";

const MyPosts = (props) => {

    let postElement =
        props.posts.map(p => {
            return <Post message={p.message} like={p.like}/>
        });

    let newPostElement = React.createRef();

    let onAddPostElement = () => {
        props.addPosts();

    }
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={style.item}>
            <h3> My Post</h3>
            <div>
                <textarea onChange={onChangePost}
                          ref={newPostElement}
                          placeholder="Enter text"
                          value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={onAddPostElement}> Add post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>

    );
}

export default MyPosts;