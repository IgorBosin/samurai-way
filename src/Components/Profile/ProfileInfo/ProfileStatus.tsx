import React from 'react';

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        isEditMode: false
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
    }

    onChangeHandler = () => {

    }

    render() {
        return (
            <div>
                {!this.state.isEditMode
                    ? <span onDoubleClick={this.activateEditMode}>
                        {this.props.status}</span>
                    : <input autoFocus onBlur={this.deactivateEditMode} onChange={this.onChangeHandler}
                             value={this.props.status}/>}
            </div>
        );
    }
}

export default ProfileStatus;


type PropsType = {
    status: string
}
type StateType = {
    isEditMode: boolean
}