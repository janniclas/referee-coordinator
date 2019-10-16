import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { ObjectTypes, ObjectType } from '../types/types';
import { Team } from '../types/team';
import { Referee } from '../types/referee';
import { useDrag } from 'react-dnd';


const getItemText = (object: ObjectTypes) => {
    switch (object.type) {
        case ObjectType.TEAM:
            const team = object as Team;
            return team.name;
        case ObjectType.REF:
            const referee = object as Referee;
            return referee.name + ' ' + referee.level;
        default:
            return '';
    }
}

export default (props: {object: ObjectTypes}) => {

    const [{ isDragging }, drag] = useDrag({
        item: props.object,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    });

    const listItemText = getItemText(props.object);
    return (
        props.object ? 
        <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
        }}
        >
            <ListItem key={props.object.id}>
                <ListItemText>
                    {listItemText}
                </ListItemText>
            </ListItem>
        </div>
        : 
        <div></div>
    );
}