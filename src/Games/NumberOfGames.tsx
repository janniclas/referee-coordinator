import React, { useState } from 'react';
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
    const [sliderValue, setSliderValue] = useState(props.value);

    const handleSliderChange = (event: React.ChangeEvent<{}>, newValue: unknown) => {
        setSliderValue(newValue as number);
    };

    const sliderChangeCommitted = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
      props.handleChange(newValue as number);
    }
  
    const handleInputChange =  (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      setSliderValue(event.target.value === '' ? 0 : Number(event.target.value));
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
              onChangeCommitted={sliderChangeCommitted}
              value={typeof sliderValue === 'number' ? sliderValue : 0}
              min={props.min}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <Input
              className={classes.input}
              value={sliderValue}
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