import React from 'react';
import { AppState } from '../store/store';
import { connect } from 'react-redux';
import { makeStyles, Theme, createStyles, List } from '@material-ui/core';
import RefereeListItem  from './RefereeListItem';
import { RefereeState } from '../types/referee';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const mapStateToProps = (state: AppState): RefereeState => {
    return {
        referees: state.referee.objects,
        refereeIds: state.referee.objectIds
    }
}

const RefereeList = (props: RefereeState) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {
                props.refereeIds.map((id) => {
                    return (
                        <RefereeListItem key={id} referee={props.referees[id]}></RefereeListItem>
                    )
                })
            }
        </List>
    );
}
const refList = connect(mapStateToProps)(RefereeList);
export default refList;