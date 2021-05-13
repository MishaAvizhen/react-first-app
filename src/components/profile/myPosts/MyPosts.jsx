import style from './MyPosts.module.css';
import Post from './post/Post';
const MyPosts = () => {
    return (
        <div className= {style.item}> 
            My Post
            <div>
                <textarea></textarea>
                <button> Add post</button>
            </div>
       
        <div className={style.content}>
          <Post message = 'Hello' like = '5'/>
          <Post message = 'First post' like = '88'/>
          <Post message = 'Second post' like = '33'/>
         
        </div>
        </div>
        
    );
}

export default MyPosts;