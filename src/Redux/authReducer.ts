import {AuthData} from "../api/api";

export const setUserData = (data: AuthData) => ({type: 'SET-USER-DATA', data: data} as const)
export const isFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

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

type ActionType = SetUserDataType | IsFetchingType
type IsFetchingType = ReturnType<typeof isFetching>
type SetUserDataType = ReturnType<typeof setUserData>
export type AuthInitialStateType = AuthData & {
    isAuth: boolean
    isFetching: boolean
}
