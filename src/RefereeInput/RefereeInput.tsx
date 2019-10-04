import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LevelInput from './LevelInput';
import NameInput from './NameInput';

export enum Level {
    R1 = 'R1',
    R2 = 'R2',
    R3 = 'R3',
    R4 = 'R4'
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    }
  }),
);

const RefereeInput = () => {

const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete='off'>
    <NameInput editable={true} name=''></NameInput>
      <LevelInput editable={true} level={Level.R1}></LevelInput>
      </form>
  );
}

export default RefereeInput;