const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE ";
const SET_TOTAL_USER = "SET_TOTAL_USER ";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING ";

let initialState = {
    users: [],
    pageSize:10,
    totalUserCount:0,
    currentPage: 1,
    isFetching: false
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
            ...state, users: action.users
                }
        }
    else if (action.type === SET_CURRENT_PAGE ) {
        return {
            ...state, currentPage: action.currentPage
                }
        }
    else if (action.type === SET_TOTAL_USER ) {
        return {
            ...state, totalUserCount: action.count
                }
        }
    else if (action.type === TOGGLE_IS_FETCHING ) {
        return {
            ...state, isFetching: action.isFetching
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
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    }
}
export const setTotalUserCountAC = (totalUserCount) => {
    return {
        type: SET_TOTAL_USER, count:totalUserCount
    }
}
export const setIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}
export default usersReducer;