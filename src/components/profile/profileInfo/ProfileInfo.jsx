import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'></img>
            <div className={style.item}>
                <img src={props.profile.photos.large} alt={"photo"}/>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                <div>
                    Fullname: {props.profile.fullName}
                </div>
                <div>
                    Vk: {props.profile.contacts.vk}
                </div>

                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;