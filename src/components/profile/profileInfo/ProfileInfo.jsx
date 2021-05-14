import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <img src='https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80'></img>
            <div className={style.item}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;