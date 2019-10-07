import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LevelInput from './LevelInput';
import NameInput from './NameInput';
import { Button } from '@material-ui/core';
import {Referee, Level} from '../store/refereeReducer';
import { addReferee } from '../store/refereeActions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

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

interface RefInputProps {
  saveRef: typeof addReferee
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveRef: (ref: Referee) => dispatch(addReferee(ref))
  }
}

const emptyRef = {
  id: 'tmp',
  name: '',
  level: Level.R1
};

const RefereeInput = (props: RefInputProps) => {

  const classes = useStyles();

  const [ref, setRef] = React.useState<Referee>(
    emptyRef
  );

  const handleNameChange = (name: string) => {
    setRef({id: ref.id, name: name, level: ref.level});
  }

  const handleLevelChange = (level: Level) => {
    setRef({id: ref.id, name: ref.name, level: level});
  }

  const submit = () => {
    // TODO: set id before submitting
    ref.id = '' + Math.random();
    props.saveRef(ref);
    setRef(emptyRef);
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
const refInput = connect(null, mapDispatchToProps) (RefereeInput);
export default refInput;