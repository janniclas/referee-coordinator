import React from 'react';
import { makeStyles, TableCell } from '@material-ui/core';
import { ObjectType, ObjectTypes } from '../types/types';
import { useDrop } from 'react-dnd';

const useStyles = makeStyles({
    canDrop: {
        backgroundColor: 'green',
    },
    cantDrop: {
      backgroundColor: 'red',
    },
    normal: {
        backgroundColor: 'white'
    }
});


const TableHeader = (props: {type?: ObjectType, children: string}) => {
    
    const classes = useStyles();

    const moveObject = (item: ObjectTypes) => {
        console.log('moved object', item);
        //TODO: emit dropped event to update / create game depending on drop location and game state
        // if there is no game create game and add item
    };

    const canDropObj = (item: ObjectTypes) => {
        return props.type ? props.type === item.type : false;
    }
    
    const [{ isOver, canDrop }, drop] = useDrop<ObjectTypes, any, any>({
        accept: Object.values(ObjectType),
        drop: (item) => moveObject(item),
        canDrop: (item) => canDropObj(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
		}),
    });


    const styleToUse = props.type && isOver ? (canDrop ? classes.canDrop : classes.cantDrop): classes.normal
    return (
        <TableCell className={styleToUse} ref={drop}>{props.children}</TableCell>
    );
}

export default TableHeader;