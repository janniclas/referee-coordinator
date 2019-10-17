import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { ObjectType, ObjectTypes } from '../types/types';
import { Game } from '../types/game';
import MyTableCell from './TableCell';
import { Team } from '../types/team';
import { Referee } from '../types/referee';

const getTeamDisplay = (team: Team | undefined) => {
    if (team === undefined)
        return '';
    else
        return team.name;
}

const getRefDisplay = (refs: Array<Referee> | undefined) => {
    if (refs === undefined)
        return '';
    else {
        return refs.reduce((previousValue, currentValue) => {return previousValue + ', ' + currentValue.name + ' ';}, '');
    } 
    
}
const MyTableRow = (props: {game: Game}) => {

    const moveObject = (item: ObjectTypes) => {
        console.log('moved object', item);
        //TODO: emit dropped event to update / create game depending on drop location and game state
        // if there is no game create game and add item
    };

    return (
        <TableRow key={props.game.id}>
            <TableCell>{props.game.time}</TableCell>
            <MyTableCell type={ObjectType.TEAM} moveObject={moveObject}>{getTeamDisplay(props.game.home)}</MyTableCell>
            <MyTableCell type={ObjectType.TEAM} moveObject={moveObject}>{getTeamDisplay(props.game.visitor)}</MyTableCell>
            <TableCell>{props.game.location}</TableCell>
            <MyTableCell type={ObjectType.TEAM} moveObject={moveObject}>{getRefDisplay(props.game.refs)}</MyTableCell>
        </TableRow>
    );
}

export default MyTableRow;