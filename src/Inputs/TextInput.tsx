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

const TextInput = (props: {title: string, handleTextChange?: (value: string) => void, value: string}) => {

  const classes = useStyles();

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(props.handleTextChange)
     props.handleTextChange(event.target.value);
  };

  return (
    props.handleTextChange ?
      <TextField
        id='outlined-name'
        label={props.title}
        className={classes.textField}
        value={props.value}
        onChange={handleChangeText}
        margin='normal'
        variant='outlined'
      />
      : 
      <TextField
      disabled
      id='outlined-name'
      label={props.title}
      className={classes.textField}
      value={props.value}
      margin='normal'
      variant='outlined'
    />
    ); 
}

export default TextInput;