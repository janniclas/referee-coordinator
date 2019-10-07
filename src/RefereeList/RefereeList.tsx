import React from 'react';
import { AppState } from '../store/store';
import { connect } from 'react-redux';
import { RefereeState } from '../store/refereeReducer';
import { makeStyles, Theme, createStyles, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const mapStateToProps = (state: AppState) => {
    return {
        referees: state.referee.referees,
        refereeIds: state.referee.refereeIds
    }
}

const RefereeList = (props: RefereeState) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                props.refereeIds.map((id) => {
                    return (
                        <ListItem key={id}>
                            {id}
                        </ListItem>
                    )
                })
            }
        </List>
    );
}
const refList = connect(mapStateToProps)(RefereeList);
export default refList;