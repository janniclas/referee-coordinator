import React from 'react';
import { makeStyles, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Game } from '../types/game';
import { ObjectState } from '../store/objectReducer';
import { AppState } from '../store/store';
import { connect } from 'react-redux';
import { ObjectType, ObjectTypes } from '../types/types';
import { useDrop } from 'react-dnd';
import TableHeader from './TableHeader';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
});

const mapStateToProps = (state: AppState) => ({
    games: state.game
});

const moveObject = (item: ObjectTypes) => {
    console.log('moved object', item);
};


const headerCells: Array<{title: string, type?: ObjectType}> = [
    {title: 'Time'}, 
    {title: 'Home', type: ObjectType.TEAM},
    {title: 'Visitor', type: ObjectType.TEAM},
    {title: 'Location'}, 
    {title: 'Refs', type: ObjectType.REF}];

const GameTable = (props: {games: ObjectState<Game>}) => {
    const classes = useStyles();

    
    const [{ isOver }, drop] = useDrop<ObjectTypes, any, any>({
        accept: Object.values(ObjectType),
        drop: (item) => moveObject(item),
        canDrop: () => true,
        collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
    });

    return (
    <div>
        <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                {headerCells.map((header) => (
                    <TableHeader type={header.type}>{header.title}</TableHeader>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {props.games.objectIds.map(id => (
                <TableRow key={id}>
                <TableCell>
                    {props.games.objects[id].time}
                </TableCell>
                <TableCell >{props.games.objects[id].home}</TableCell>
                <TableCell >{props.games.objects[id].visitor}</TableCell>
                <TableCell >{props.games.objects[id].location}</TableCell>
                <TableCell >{props.games.objects[id].refs}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </Paper>
    </div>
    );
}

export default connect(mapStateToProps)(GameTable);