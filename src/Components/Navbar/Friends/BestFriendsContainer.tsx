import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {DialogsType} from "Redux/dialogsReducer";
import {BestFriends} from "./BestFriends";
import {AppRootStateType} from "Redux/store";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        bestFriends: state.sidebar
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {}
}

export const BestFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(BestFriends)

export type BestFriendsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    bestFriends: DialogsType[]
}
type MapDispatchPropsType = {}
