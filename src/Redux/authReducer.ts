import {authApi, AuthData, profileApi} from "../api/api";
import {Dispatch} from "redux";
import {setUserProfile} from "./profileReducer";
import {LoginInputsType} from "../Components/Login/Login";
import {AppThunkDispatch} from "./store";

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
            return {...state, ...action.payload, isAuth: action.isAuth}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

//action creators
export const setUserData = (data: AuthData | null, isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: data,
    isAuth
} as const)
export const isFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

//thunk creators
export const getUserData = () => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    authApi.auth()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(res.data.data, true))
                dispatch(isFetching(false))
            } else {
                dispatch(isFetching(false))
                console.error('NOT AUTH')
            }
        })
}
export const toggleIsFetching = (id: string) => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    profileApi.getUserProfile(id)
        .then(res => {
            dispatch(setUserProfile(res.data))
            dispatch(isFetching(false))
        })
}
export const login = (auth: LoginInputsType) => (dispatch: AppThunkDispatch) => {
    dispatch(isFetching(true))
    authApi.login(auth)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(isFetching(false))
                dispatch(getUserData())
            } else {
                dispatch(isFetching(false))
                console.error('NOT AUTH')
            }
        })
}
export const logout = () => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    authApi.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(isFetching(false))
                dispatch(setUserData({id: 0, email: '', login: ''}, false))
            } else {
                dispatch(isFetching(false))
                console.error('NOT AUTH')
            }
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
