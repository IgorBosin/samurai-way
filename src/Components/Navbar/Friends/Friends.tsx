import React from 'react';
import {dialogsType} from "../../../App";

type FriendsType = {
    sidebar: dialogsType[]
}

const Friends = (props: FriendsType) => {
    return (
        <div>
            <div style={{marginTop:'30px'}}>Best Friends</div>
            {props.sidebar.map(el => {
                return (
                    <div>
                        <img style={{width: '30px'}} src={el.avatar} alt=""/>
                        {el.name}
                    </div>
                )
            })}
        </div>
    );
};

export default Friends;