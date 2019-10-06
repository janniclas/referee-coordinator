import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LevelInput from './LevelInput';
import NameInput from './NameInput';
import { Button } from '@material-ui/core';
import {Referee, Level} from '../store/refereeReducer';

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

  const submit = () => {
    console.log('submitted');
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <NameInput handleNameChange={handleNameChange} name={ref.name}/>
      <LevelInput handleLevelChange={handleLevelChange} level={ref.level}/>
      <Button variant="contained" className={classes.button} onClick={submit}>
        Save
      </Button>
    </form>
  );
}

export default RefereeInput;