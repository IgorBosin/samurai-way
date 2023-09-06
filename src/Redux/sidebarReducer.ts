import {v1} from "uuid";
import {DialogsType} from "./dialogsReducer";

export type sidebarReducerActionsType = {
    type: ''
}

const initialState: DialogsType[] = [
    {id: v1(), name: 'Maria', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    {id: v1(), name: 'Leha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
]

export const sidebarReducer = (state: DialogsType[] = initialState, action: sidebarReducerActionsType): DialogsType[] => {
    switch (action.type) {
        default:
            return state
    }
}
