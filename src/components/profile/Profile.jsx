import MyPosts from './myPosts/MyPosts';
import style from './Profile.module.css';
const Profile = () => {
    return (
        <div className={style.content}>
            <img src='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'></img>
            <div className={style.item}>
                ava + descr
        </div >
        <MyPosts/>
        </div >
    )
}
 export default Profile;