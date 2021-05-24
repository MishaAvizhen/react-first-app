const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeQX37fjP_C1d_S6nZ0htQXhkO4VentA-lg&usqp=CAU",
            follow: true, name: "Misha", status: " I'am  junior React developer", location: {country: "Belarus", city: "Minsk"}},
        {id: 2,photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeQX37fjP_C1d_S6nZ0htQXhkO4VentA-lg&usqp=CAU",
            follow: false, name: "Sasha", status: " I'am  java developer", location: {country: "Belarus", city: "Minsk"}},
        {id: 3, photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVeQX37fjP_C1d_S6nZ0htQXhkO4VentA-lg&usqp=CAU",
            follow: true,name: "Bob", status: " I'am   developer", location: {country: "Russia", city: "Moscow"}}

    ]
};

const usersReducer = (state = initialState, action) => {

    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, follow: false};
                }
                return u;
            })
        };

    }
     else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, follow: true};
                }
                return u;
            })
        };
    }
    else if (action.type === SET_USERS) {
        return {
            ...state, users: [...state.users, ...action.users]
                }
        }
    return state;


}
export const followAC = (userId) => {
    return {
        type: FOLLOW, userId

    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}
export default usersReducer;