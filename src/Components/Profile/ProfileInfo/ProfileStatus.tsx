import React, {ChangeEvent} from 'react';

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        isEditMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            isEditMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            isEditMode: false
        })
        this.props.changeUserStatus(this.state.status)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.isEditMode
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    : <input autoFocus onBlur={this.deactivateEditMode} onChange={this.onChangeHandler}
                             value={this.state.status}/>}
            </div>
        );
    }
}

export default ProfileStatus;


type PropsType = {
    status: string
    changeUserStatus: (status: string) => void
}
type StateType = {
    isEditMode: boolean
    status: string
}