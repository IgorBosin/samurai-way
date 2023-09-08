import {authApi, AuthData, profileApi} from "../api/api";
import {Dispatch} from "redux";
import {setUserProfile} from "./profileReducer";

const initialState: AuthInitialStateType = {
    id: 0,
    email: '',
    login: '',
    isAuth: false,
    isFetching: false,
}

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionType): AuthInitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isAuth: true}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state
    }
}

//action creators
export const setUserData = (data: AuthData) => ({type: 'SET-USER-DATA', data: data} as const)
export const isFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

//thunk creators
export const getUserData = () => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    authApi.auth()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data))
                dispatch(isFetching(false))
            } else {
                dispatch(isFetching(false))
            }
        })
}
export const toggleIsFetching = (id: string) => (dispatch: Dispatch) => {
    let userId = id
    if (!userId) userId = '1045';
    dispatch(isFetching(true))
    profileApi.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data)) // export from /profileReducer
            dispatch(isFetching(true))
        })
}

//types
type ActionType = SetUserDataType | IsFetchingType
type IsFetchingType = ReturnType<typeof isFetching>
type SetUserDataType = ReturnType<typeof setUserData>
export type AuthInitialStateType = AuthData & {
    isAuth: boolean
    isFetching: boolean
}
