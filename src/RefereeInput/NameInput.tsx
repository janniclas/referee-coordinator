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

const NameInput = (props: {editable: boolean, name: string}) => {

  const classes = useStyles();

  const [name, setName] = React.useState<string>(
   props.name,
  );

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };


  return (
    props.editable ?
      <TextField
        id='outlined-name'
        label='Name'
        className={classes.textField}
        value={name}
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
      value={name}
      margin='normal'
      variant='outlined'
    />
    ); 
}

export default NameInput;