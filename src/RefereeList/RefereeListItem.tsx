import React from 'react';
import { Referee } from '../store/refereeReducer';
import { ListItem, ListItemText } from '@material-ui/core';


const RefereeListItem = (props: {referee: Referee}) => {

    return (
        props.referee ? 
        <ListItem key={props.referee.id}>
            <ListItemText>
                {props.referee.name} {props.referee.level}
            </ListItemText>
        </ListItem>
        : 
        <div></div>
    );
}

export default RefereeListItem;