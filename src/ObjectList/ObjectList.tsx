import React from 'react';
import { makeStyles, Theme, createStyles, List } from '@material-ui/core';
import { ObjectState, MetaInfo } from '../store/objectReducer';
import ObjectListItem from './ObjectListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);


export default <T extends MetaInfo>(props: ObjectState<T>) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                props.objectIds.map((id) => {
                    return (
                        <ObjectListItem key={id} object={props.objects[id]}/>
                    )
                })
            }
        </List>
    );
}