import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../Redux/store';
import Profile from './Profile';
import {ProfilePageType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../Redux/authReducer";
import {UserProfileType} from "../../api/api";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile,
})

class ProfileContainer extends React.Component<PropsType, ProfilePageType> {
    componentDidMount() {
        this.props.toggleIsFetching(this.props.match.params.userId)
    }

    render() {

        // if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile profileUser={this.props.userProfile}/>
            </div>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer) // сначала оборач в withRouter и получ доп.св-ва

const authRedirectComponent = WithAuthRedirect(WithUrlDataContainerComponent)

export default connect(mapStateToProps, {toggleIsFetching})(authRedirectComponent)

// types
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: UserProfileType
}
type MapDispatchPropsType = {
    toggleIsFetching: (userId: string) => void
}

