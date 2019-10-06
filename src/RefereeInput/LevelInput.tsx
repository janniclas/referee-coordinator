import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Level } from '../store/store';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }),
);

const LevelInput = (props: {handleLevelChange?: (level: Level) => void, level: Level}) => {

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    if(props.handleLevelChange)
     props.handleLevelChange(event.target.value as Level);
  };


  return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="level">Level</InputLabel>
        <Select
          value={props.level}
          onChange={handleChange}
          inputProps={{
            level: Level.R1,
            id: 'level',
          }}
        >
          <MenuItem value={Level.R1}>White</MenuItem>
          <MenuItem value={Level.R2}>Black</MenuItem>
          <MenuItem value={Level.R3}>Red</MenuItem>
          <MenuItem value={Level.R4}>Gold</MenuItem>
        </Select>
      </FormControl>
  );
}

export default LevelInput