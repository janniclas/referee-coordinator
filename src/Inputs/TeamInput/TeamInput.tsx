import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Team } from '../../types/team';
import TextInput from '../TextInput';
import { ObjFormProps, mapObjDispatchToProps } from '../ObjectForm';
import { ObjectType } from '../../types/types';


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

const emptyTeam = {
    name: '',
    id: 'tmp',
    type: ObjectType.TEAM
};

const TeamInput = (props: ObjFormProps<Team>) => {

  const classes = useStyles();

  const [team, setTeam] = React.useState<Team>(
    emptyTeam
  );

  const handleNameChange = (newName: string) => {
    setTeam(Object.assign({...team}, {name: newName}));
  }

  const submit = (event: any) => {
    event.preventDefault();
    team.id = '' + Math.random();
    props.saveObj(team);
    setTeam(emptyTeam);
  }

  return (
    <form className={classes.container} noValidate autoComplete='off' onSubmit={submit}>
      <TextInput value={team.name} handleTextChange={handleNameChange} title={'Team Name'}></TextInput>
      <Button variant="contained" className={classes.button} onClick={submit}>
        Add
      </Button>
    </form>
  );
}

export default connect<{}, ObjFormProps<Team>>(null, mapObjDispatchToProps) (TeamInput);