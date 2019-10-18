import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { ObjectType, ObjectTypes } from '../types/types';
import { Game } from '../types/game';
import MyTableCell from './TableCell';
import { Team } from '../types/team';
import { Referee } from '../types/referee';
import { Dispatch } from 'redux';
import { editObject } from '../store/objectActions';
import { connect } from 'react-redux';


export enum cellTypes {
    HOME = 'HOME',
    VISITOR = 'VISITOR',
    REFS = 'REFS'
}

const homeType = {objType: ObjectType.TEAM, cellType: cellTypes.HOME};
const visitorType = {objType: ObjectType.TEAM, cellType: cellTypes.VISITOR};
const refType = {objType: ObjectType.REF, cellType: cellTypes.REFS};


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateGame: (game: Game) =>  dispatch(editObject<Game>(game)),
    }
}

 
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

const updateGame = (game: Game, item: ObjectTypes, target: cellTypes) => {
    switch(target) {
        case cellTypes.HOME:
            game.home = item as Team;
            return game;
        case cellTypes.VISITOR:
            game.visitor = item as Team;
            return game;
    }
    return undefined;
}

const MyTableRow = (props: {game: Game} & ReturnType<typeof mapDispatchToProps>) => {

    const moveObject = (item: ObjectTypes, targetCell: cellTypes) => {
        const updatedGame = updateGame(props.game, item, targetCell);
        if(updatedGame !== undefined) {
                props.updateGame(updatedGame)
        }
    };

    return (
        <TableRow key={props.game.id}>
            <TableCell>{props.game.time}</TableCell>
            <MyTableCell type={homeType} moveObject={moveObject}>{getTeamDisplay(props.game.home)}</MyTableCell>
            <MyTableCell type={visitorType} moveObject={moveObject}>{getTeamDisplay(props.game.visitor)}</MyTableCell>
            <TableCell>{props.game.location}</TableCell>
            <MyTableCell type={refType} moveObject={moveObject}>{getRefDisplay(props.game.refs)}</MyTableCell>
        </TableRow>
    );
}

export default connect<{}, ReturnType<typeof mapDispatchToProps>>(null, mapDispatchToProps)(MyTableRow);