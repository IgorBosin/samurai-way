import {getUserData} from "Redux/authReducer";
import {AppDispatchType} from "Redux/store";

const initialState: AppInitialStateType = {
    isInitialized: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: ActionType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET-INITIALIZED': {
            return {...state, isInitialized: true}
        }
        default:
            return state
    }
}

//action creators
export const setAppInitialized = () => ({type: 'APP/SET-INITIALIZED'} as const)

//thunk creators
export const appInitialized = () => (dispatch: AppDispatchType) => {
    const promise = dispatch(getUserData())
    // const promise2 = dispatch(anyAC())
    Promise.all([promise])
        .then(() => {
          dispatch(setAppInitialized())
        })
}

//types
type ActionType = SetAppInitializedType
type SetAppInitializedType = ReturnType<typeof setAppInitialized>
export type AppInitialStateType = {
    isInitialized: boolean
}
