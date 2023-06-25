import React from 'react';
import {connect} from "react-redux";
import BestFriends from "./BestFriends";
import {AppRootState} from "../../../Redux/store";
import {dialogsType} from "../../../Redux/dialogsReducer";
import {Dispatch} from "redux";

type MapStatePropsType = {
    bestFriends: dialogsType[]
}

type MapDispatchPropsType = {}
export type BestFriendsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        bestFriends: state.sidebar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {}
}

export const BestFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(BestFriends)