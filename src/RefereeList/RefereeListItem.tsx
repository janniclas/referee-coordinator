import React from 'react';
import { Referee } from '../store/refereeReducer';
import { makeStyles, Theme, createStyles, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import LevelInput from '../RefereeInput/LevelInput';
import NameInput from '../RefereeInput/NameInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);


const RefereeListItem = (props: {referee: Referee}) => {
    //const classes = useStyles();
    console.log('pr', props);
    return (
        props.referee ? 
        <ListItem key={props.referee.id}>
            <ListItemText>
                {props.referee.name} {props.referee.level}
            </ListItemText>
        </ListItem>
        : 
        <div></div>
    );
}

export default RefereeListItem;