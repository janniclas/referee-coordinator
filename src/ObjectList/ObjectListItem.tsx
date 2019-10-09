import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { ObjectTypes } from '../types/types';
import { TEAM, Team } from '../types/team';
import { REF, Referee } from '../types/referee';


const getItemText = (object: ObjectTypes) => {
    switch (object.type) {
        case TEAM:
            const team = object as Team;
            return team.name;
        case REF:
            const referee = object as Referee;
            return referee.name + ' ' + referee.level;
        default:
            return '';
    }
}

export default (props: {object: ObjectTypes}) => {

    const listItemText = getItemText(props.object);
    return (
        props.object ? 
        <ListItem key={props.object.id}>
            <ListItemText>
                {listItemText}
            </ListItemText>
        </ListItem>
        : 
        <div></div>
    );
}