import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "../../../Redux/store";
import {Dispatch} from "redux";
import {DialogsType} from "../../../Redux/dialogsReducer";
import {BestFriends} from "./BestFriends";

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
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
