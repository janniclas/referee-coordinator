import React from 'react';
import { makeStyles, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Game } from '../types/game';
import { ObjectState } from '../store/objectReducer';
import { AppState } from '../store/store';
import { connect } from 'react-redux';
import { ObjectType, ObjectTypes } from '../types/types';
import { useDrop } from 'react-dnd';

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

const GameTable = (prop: {games: ObjectState<Game>}) => {
    const classes = useStyles();

    
    const [{ isOver }, drop] = useDrop<ObjectTypes, any, any>({
        accept: Object.values(ObjectType),
        drop: (item) => moveObject(item),
        collect: monitor => ({
			isOver: !!monitor.isOver(),
		}),
    });

    return (
    <div>
        <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow ref={drop}>
                <TableCell>Time</TableCell>
                <TableCell>Home</TableCell>
                <TableCell>Visitor</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Refs</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {prop.games.objectIds.map(id => (
                <TableRow key={id}>
                <TableCell>
                    {prop.games.objects[id].time}
                </TableCell>
                <TableCell >{prop.games.objects[id].home}</TableCell>
                <TableCell >{prop.games.objects[id].visitor}</TableCell>
                <TableCell >{prop.games.objects[id].location}</TableCell>
                <TableCell >{prop.games.objects[id].refs}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </Paper>
    </div>
    );
}

export default connect(mapStateToProps)(GameTable);