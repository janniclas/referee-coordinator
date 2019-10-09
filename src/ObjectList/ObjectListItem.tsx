import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { MetaInfo } from '../store/objectReducer';
import { TEAM, Team } from '../types/team';
import { REF, Referee } from '../types/referee';


const getItemText = <T extends MetaInfo>(object: T) => {
    switch(object.type) {
        case TEAM:
            const team = (object as unknown) as Team;
            return team.name;
        case REF:
            const referee = (object as unknown) as Referee;
            return referee.name + ' ' + referee.level;
        default:
            return '';
    }
}

export default <T extends MetaInfo>(props: {object: T}) => {
    const listItemText = getItemText<T>(props.object);
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