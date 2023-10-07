import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    changeUserStatus: (status: string) => void
}

export const ProfileStatusWithUseState = (props: PropsType) => {

    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        debugger
        if (props.status !== status) {
            setStatus(props.status)
        }
    }, [props.status])

    const activateEditMode = () => {
        setIsEditMode(true)
    }

    const deactivateEditMode = () => {
        setIsEditMode(false)

        props.changeUserStatus(status)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!isEditMode
                ? <span onDoubleClick={activateEditMode}>{props.status}</span>
                : <input autoFocus onBlur={deactivateEditMode} onChange={onChangeHandler}
                         value={status}/>}
        </div>
    );
}



