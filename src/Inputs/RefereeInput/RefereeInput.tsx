import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LevelInput from './LevelInput';
import TextInput from './../TextInput';
import { Button } from '@material-ui/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addObject, ObjectAction } from '../../store/objectActions';
import { Referee, Level, REF } from '../../types/referee';

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
  saveRef: (ref: Referee) => ObjectAction<Referee>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveRef: (ref: Referee) => dispatch(addObject<Referee>(ref))
  }
}

const emptyRef = {
  id: 'tmp',
  name: '',
  level: Level.R1,
  type: REF
};

const RefereeInput = (props: RefInputProps) => {

  const classes = useStyles();

  const [ref, setRef] = React.useState<Referee>(
    emptyRef
  );

  const handleNameChange = (newName: string) => {
    setRef(Object.assign({...ref}, {name: newName}));
  }

  const handleLevelChange = (newLevel: Level) => {
    setRef(Object.assign({...ref}, {level: newLevel}));
  }

  const submit = () => {
    //TODO: this should be improved
    ref.id = '' + Math.random();
    props.saveRef(ref);
    setRef(emptyRef);
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <TextInput title={'Name'} handleTextChange={handleNameChange} value={ref.name}/>
      <LevelInput handleLevelChange={handleLevelChange} level={ref.level}/>
      <Button variant="contained" className={classes.button} onClick={submit}>
        Add
      </Button>
    </form>
  );
}
const refInput = connect(null, mapDispatchToProps) (RefereeInput);
export default refInput;