import {AuthData} from "../Components/Header/HeaderContainer";

export type AuthReducerType = SetUserDataType | ToggleFetchingACType
type SetUserDataType = ReturnType<typeof setUserData>

export const setUserData = (data: AuthData) => ({
    type: 'SET-USER-DATA',
    data: data
} as const)

export const isFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
type ToggleFetchingACType = ReturnType<typeof isFetching>

export type AuthInitialStateType = AuthData & {
    isAuth: boolean
    isFetching: boolean
}

const initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

export const authReducer = (state: AuthInitialStateType = initialState, action: AuthReducerType): AuthInitialStateType => {
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

