import React from 'react';
import { makeStyles, TableCell } from '@material-ui/core';
import { ObjectType, ObjectTypes } from '../types/types';
import { useDrop } from 'react-dnd';
import { cellTypes } from './TableRow';

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


const MyTableCell = (props: {type?: {objType: ObjectType, cellType: cellTypes}, children?: string, moveObject: (item: ObjectTypes, targetCell: cellTypes) => void}) => {
    
    const classes = useStyles();


    const canDropObj = (item: ObjectTypes) => {
        return props.type ? props.type.objType === item.type : false;
    }

    const [{ isOver, canDrop }, drop] = useDrop<ObjectTypes, any, any>({
        accept: Object.values(ObjectType),
        drop: (item) => { 
            if (props.type !== undefined) 
                props.moveObject(item, props.type.cellType)},
        canDrop: (item) => canDropObj(item),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });

    const styleToUse = props.type && isOver ? (canDrop ? classes.canDrop : classes.cantDrop): classes.normal
    return (
        <TableCell className={styleToUse} ref={drop}>{props.children ? props.children: ''}</TableCell>
    );

    

}

export default MyTableCell;