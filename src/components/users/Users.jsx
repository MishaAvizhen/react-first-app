import React from "react";
import style from "./User.module.css";
import userPhoto from "../../assets/image/user.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)


    }
    return <div>
        <div>
            {pages.map(p => {
                return < span className={props.currentPage === p && style.selectedPage}
                              onClick={(e) => {
                                  props.onPageChanged(p);
                              }}>{p}</span>
            })}
        </div>
        {
           props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to ={"/profile/"+u.id}>
                             <img className={style.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}
                                  alt={"user"}/>
                        </NavLink>

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
                    <div>"u.location.country"</div>
                    <div>"u.location.city"</div>
                </span>
            </div>)
        }
    </div>

};
export default Users;