import React from 'react';
import NumberOfGamesSelector from './NumberOfGames';
import GameTable from './GameTable';
import { AppState } from '../store/store';
import { ObjectState } from '../store/objectReducer';
import { Game } from '../types/game';
import { connect } from 'react-redux';
import { ObjectType } from '../types/types';
import { Dispatch } from 'redux';
import { addBatch, removeBatch } from '../store/objectActions';


const mapStateToProps = (state: AppState) => (
    state.game
);

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addGames: (games: Array<Game>) => dispatch(addBatch(games)),
        removeGames: (games: Array<Game>) => dispatch(removeBatch(games)),
    }
}

const createEmptyGames = (count: number) => {
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

const isEmpty = (game: Game) => {
    return game.home === undefined && game.location === undefined 
            && game.visitor === undefined && game.time === undefined 
            && game.refs === undefined;
}

export const getEmptyGames = (games: Array<Game>) => {
    return games.filter((game) =>
        isEmpty(game)
    );
}

const START_NUMBER_OF_GAMES = 4;

const GameOverview = (props: ObjectState<Game> & ReturnType<typeof mapDispatchToProps>) => {

    const games = Object.values(props.objects);
    const emptyGames = getEmptyGames(games);
    const min = games.length - emptyGames.length;

    const handleChange = (value: number) => {

        if (value < min) {
            value = min;
        } else if (value > 100) {
            value = 100;
        }
        
        const noOfGamesToAdd = value - games.length;

        if (noOfGamesToAdd > 0) {
            props.addGames(createEmptyGames(noOfGamesToAdd))
        } else {
            if(noOfGamesToAdd < 0) {
                const noToRemove = noOfGamesToAdd * -1 > emptyGames.length ? emptyGames.length: noOfGamesToAdd * -1 ;
                const gamesToRemove = emptyGames.splice(emptyGames.length - noToRemove, noToRemove);
                props.removeGames(gamesToRemove);
            }
        }
    }

    if (props.objectIds.length < START_NUMBER_OF_GAMES) {
        handleChange(START_NUMBER_OF_GAMES - props.objectIds.length)
    } 

    return (
        <div>
            <NumberOfGamesSelector value={games.length} handleChange={handleChange} min={min}/>
            <GameTable games={games}/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (GameOverview);