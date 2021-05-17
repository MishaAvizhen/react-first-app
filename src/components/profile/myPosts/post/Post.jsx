import style from './Post.module.css';
const Post = (props) => {
    return (
        <div className={style.item}>
            <img src = 'https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg'></img>
           {props.message}
           {props.id}
           <div>
           <span> like </span> {props.like}
          
           </div>
           
        </div>
        

    );
}

export default Post;