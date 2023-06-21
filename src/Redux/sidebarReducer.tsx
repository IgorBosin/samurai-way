import {dialogsType} from "../App";
import {v1} from "uuid";
import {dispatchActionsType} from "./store";

export type sidebarReducerActionsType = {
    type: ''
}

const initialState: dialogsType[] = [
    {id: v1(), name: 'Maria', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    {id: v1(), name: 'Leha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
]

export const sidebarReducer = (state: dialogsType[] = initialState, action: dispatchActionsType): dialogsType[] => {
    switch (action.type) {
        default:
            return state
    }
}
