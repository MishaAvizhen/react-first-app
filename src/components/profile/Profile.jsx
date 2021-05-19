import MyPosts from './myPosts/MyPosts';
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatcher={props.dispatcher}/>
        </div>
    )
}
export default Profile;