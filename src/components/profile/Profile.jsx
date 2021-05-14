import MyPosts from './myPosts/MyPosts';
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}
export default Profile;