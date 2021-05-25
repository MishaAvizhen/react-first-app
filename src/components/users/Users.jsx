import React from "react";
import style from './User.module.css';
import userPhoto from "../../assets/image/user.png"
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            });
    }
onPageChanged=(pageNumber)=>{
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items)
        });

}
    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)


        }

        return <div>
            <div>
                {pages.map(p => {
                    return < span className={this.props.currentPage === p && style.selectedPage}
                    onClick={(e)=>{this.onPageChanged(p);}}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                           <img className={style.userPhoto} src={userPhoto} alt={"user"}/>
                    </div>
                    <div>
                        {u.follow ? <button onClick={() => {
                                this.props.follow(u.id)
                            }}> Follow</button> :
                            <button onClick={() => {
                                this.props.unfollow(u.id)
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

    }
}

export default Users;