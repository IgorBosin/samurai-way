import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "Redux/store";

const mapStateToProps = (props: AppRootStateType): MapStatePropsType => {
    return {
        isAuth: props.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const authRedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return  connect(mapStateToProps)(authRedirectComponent)
}

type MapStatePropsType = {
    isAuth: boolean
}
