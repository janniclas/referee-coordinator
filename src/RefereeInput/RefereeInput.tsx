import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LevelInput from './LevelInput';
import NameInput from './NameInput';
import { Button } from '@material-ui/core';

export enum Level {
    R1 = 'R1',
    R2 = 'R2',
    R3 = 'R3',
    R4 = 'R4'
  }

interface Referee {
  name: string,
  level: Level
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const RefereeInput = () => {

const classes = useStyles();

const [ref, setRef] = React.useState<Referee>(
  {
    name: '',
    level: Level.R1
  }
 );

 const handleNameChange = (name: string) => {
  setRef({name: name, level: ref.level});
 }

 const handleLevelChange = (level: Level) => {
  setRef({name: ref.name, level: level});
}

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <NameInput handleNameChange={handleNameChange} name={ref.name}/>
      <LevelInput handleLevelChange={handleLevelChange} level={ref.level}/>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
    </form>
  );
}

export default RefereeInput;