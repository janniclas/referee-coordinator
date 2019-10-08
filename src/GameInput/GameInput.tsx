import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addObject, ObjectAction } from '../store/objectActions';
import { Game, GAME } from '../types/game';


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

interface GameInputProps {
  saveGame: (game: Game) => ObjectAction<Game>
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveGame: (game: Game) => dispatch(addObject<Game>(game))
  }
}

const emptyGame = {
    visitor: '',
    home: '',
    id: 'tmp',
    type: GAME,
    location: '',
    time: 0
};

const GameInput = (props: GameInputProps) => {

  const classes = useStyles();

  const [Game, setGame] = React.useState<Game>(
    emptyGame
  );

//   const handleNameChange = (name: string) => {
//     setGame({id: Game.id, name: name, level: Game.level, type: Game.type});
//   }

//   const handleLevelChange = (level: Level) => {
//     setGame({id: Game.id, name: Game.name, level: level, type: Game.type});
//   }

  const submit = () => {
    //TODO: this should be improved
    Game.id = '' + Math.random();
    props.saveGame(Game);
    setGame(emptyGame);
  }

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Button variant="contained" className={classes.button} onClick={submit}>
        Add
      </Button>
    </form>
  );
}

export default connect(null, mapDispatchToProps) (GameInput);