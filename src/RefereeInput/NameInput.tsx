import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }),
);

const NameInput = (props: {handleNameChange?: (name: string) => void, name: string}) => {

  const classes = useStyles();

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(props.handleNameChange)
     props.handleNameChange(event.target.value);
  };

  return (
    props.handleNameChange ?
      <TextField
        id='outlined-name'
        label='Name'
        className={classes.textField}
        value={props.name}
        onChange={handleChangeText}
        margin='normal'
        variant='outlined'
      />
      : 
      <TextField
      disabled
      id='outlined-name'
      label='Name'
      className={classes.textField}
      value={props.name}
      margin='normal'
      variant='outlined'
    />
    ); 
}

export default NameInput;