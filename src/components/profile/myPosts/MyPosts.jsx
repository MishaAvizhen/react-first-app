import style from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    let posts = [
        {message: "Hello", like: 45},
        {message: "First post", like: 12},
        {message: "Second post", like: 87},
    ]
    let postElement =
        posts.map(p => {
            return <Post message={p.message} like={p.like}/>
        });
    return (
        <div className={style.item}>
            <h3> My Post</h3>
            <div>
                <textarea>
                    Test1
                </textarea>
            </div>
            <div>
                <button> Add post</button>
            </div>

            <div className={style.content}>
                {postElement}


            </div>
        </div>

    );
}

export default MyPosts;