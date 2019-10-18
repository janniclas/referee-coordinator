import React from 'react';
import NumberOfGamesSelector from './NumberOfGames';
import GameTable from './GameTable';
import { AppState } from '../store/store';
import { ObjectState } from '../store/objectReducer';
import { Game } from '../types/game';
import { connect } from 'react-redux';
import { ObjectType } from '../types/types';
import { Dispatch } from 'redux';
import { addBatch, ObjectAction } from '../store/objectActions';


const mapStateToProps = (state: AppState) => (
    state.game
);

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addGames: (games: Array<Game>) => dispatch(addBatch(games))
    }
}

const getEmptyGames = (count: number) => {
    const newGames = [];
    for (let i = 0; i < count; i++) {
        const id = '' + Math.random();
        newGames.push({
            id: id,
            type: ObjectType.GAME
        });
    }
    return newGames;
}
const START_NUMBER_OF_GAMES = 4;
const GameOverview = (props: ObjectState<Game> & {addGames: (games: Array<Game>)=> ObjectAction<Game>}) => {


   // const [emptyGames, setEmptyGames] = useState(getEmptyGames(START_NUMBER_OF_GAMES));
    const startGameNumber = START_NUMBER_OF_GAMES < props.objectIds.length ? props.objectIds.length: START_NUMBER_OF_GAMES;

    const handleChange = (value: number) => {

        if (value < props.objectIds.length) {
            value = props.objectIds.length;
        } else if (value > 100) {
            value = 100;
        }
        
        const noOfGamesToAdd = value - props.objectIds.length;

        if (noOfGamesToAdd > 0) {
            //setEmptyGames(getEmptyGames(noOfGamesToAdd));
            props.addGames(getEmptyGames(noOfGamesToAdd))
        }
    }

    const games = Object.values(props.objects);

    return (
        <div>
            <NumberOfGamesSelector value={startGameNumber} handleChange={handleChange} min={props.objectIds.length}/>
            <GameTable games={games}/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (GameOverview);