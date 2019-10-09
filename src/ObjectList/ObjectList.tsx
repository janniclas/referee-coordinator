import React from 'react';
import { makeStyles, Theme, createStyles, List } from '@material-ui/core';
import { ObjectState, MetaInfo } from '../store/objectReducer';
import ObjectListItem from './ObjectListItem';
import { connect } from 'react-redux';
import { AppState } from '../store/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const mapStateToPropsRef = (state: AppState) => ({
  objects: state.referee.objects,
  objectIds: state.referee.objectIds
})

const mapStateToPropsTeam = (state: AppState) => ({
  objects: state.team.objects,
  objectIds: state.referee.objectIds
})

const objectList = <T extends MetaInfo>(props: ObjectState<T>) => {
    
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

export const RefereeList = connect(mapStateToPropsRef)(objectList) 
export const TeamList = connect(mapStateToPropsTeam)(objectList) 