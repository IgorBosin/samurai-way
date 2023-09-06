import React from 'react';
import {BestFriendsType} from "./BestFriendsContainer";

export const BestFriends = (props: BestFriendsType) => {

    return (
        <div>
            <div style={{marginTop: '30px'}}>Best Friends</div>
            {props.bestFriends.map((el, index) => {
                return (
                    <div key={index}>
                        <img style={{width: '30px'}} src={el.avatar} alt=""/>
                        {el.name}
                    </div>
                )
            })}
        </div>
    );
};