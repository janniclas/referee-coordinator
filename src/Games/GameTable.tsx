import React from 'react';
import { makeStyles, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { Game } from '../types/game';
import { ObjectType } from '../types/types';
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

const headerCells: Array<{title: string, type?: ObjectType}> = [
    {title: 'Time'}, 
    {title: 'Home', type: ObjectType.TEAM},
    {title: 'Visitor', type: ObjectType.TEAM},
    {title: 'Location'}, 
    {title: 'Refs', type: ObjectType.REF}
];

const GameTable = (props: {games: Array<Game>}) => {
    const classes = useStyles();

    return (
    <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                {headerCells.map((header) => (
                    <TableHeader key={header.title} type={header.type}>{header.title}</TableHeader>
                ))}
            </TableRow>
            </TableHead>
            <TableBody>
            {props.games.map(game => (
                <TableRow key={game.id}>
                <TableCell>
                    {game.time}
                </TableCell>
                <TableCell>{game.home}</TableCell>
                <TableCell>{game.visitor}</TableCell>
                <TableCell>{game.location}</TableCell>
                <TableCell>{game.refs}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </Paper>
    );
}

export default GameTable;