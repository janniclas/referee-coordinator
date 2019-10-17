import React from 'react';
import { Typography, Grid, Slider, Input, makeStyles } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
      width: 250,
    },
    input: {
      width: 42,
    },
  });

const NumberOfGamesSelector = (props: {value: number, min: number, handleChange: (value: number) => void}) => {

    const classes = useStyles();
  
    const handleSliderChange = (event: React.ChangeEvent<{}>, newValue: unknown) => {
        props.handleChange(newValue as number);
    };
  
    const handleInputChange =  (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        props.handleChange(event.target.value === '' ? 0 : Number(event.target.value));
    };
  

    return (
        <div className={classes.root}>
        <Typography id="input-slider" gutterBottom>
          Number of Games
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof props.value === 'number' ? props.value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={props.value}
              margin="dense"
              onChange={handleInputChange}
              inputProps={{
                step: 5,
                min: props.min,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
}

export default NumberOfGamesSelector;