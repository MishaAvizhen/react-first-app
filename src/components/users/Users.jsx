import style from './User.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/image/user.png"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([

            {
                id: 1,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeQX37fjP_C1d_S6nZ0htQXhkO4VentA-lg&usqp=CAU",
                follow: true,
                name: "Misha",
                status: " I'am  junior React developer",
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 2,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeQX37fjP_C1d_S6nZ0htQXhkO4VentA-lg&usqp=CAU",
                follow: false,
                name: "Sasha",
                status: " I'am  java developer",
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 3,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeQX37fjP_C1d_S6nZ0htQXhkO4VentA-lg&usqp=CAU",
                follow: true,
                name: "Bob",
                status: " I'am   developer",
                location: {country: "Russia", city: "Moscow"}
            }
        ]);
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                           <img className={style.userPhoto} src={userPhoto}/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => {
                                props.follow(u.id)
                            }}> Follow</button> :
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>
}
export default Users;