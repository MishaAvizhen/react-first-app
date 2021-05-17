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
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';

    }
    return (
        <div className={style.item}>
            <h3> My Post</h3>
            <div>
                <textarea ref={newPostElement}>
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