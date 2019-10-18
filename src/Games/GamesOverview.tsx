import React from 'react';
import NumberOfGamesSelector from './NumberOfGames';
import GameTable from './GameTable';
import { AppState } from '../store/store';
import { Game } from '../types/game';
import { connect } from 'react-redux';
import { ObjectType } from '../types/types';
import { Dispatch } from 'redux';
import { addBatch, removeBatch } from '../store/objectActions';


const mapStateToProps = (state: AppState) => {
    const games = Object.values(state.game.objects)
    const emptyGames = getEmptyGames(games);
    const min = games.length - emptyGames.length;
    return {
        games, emptyGames, min
    }
};

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

const GameOverview = (props: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) => {

    const handleChange = (value: number) => {

        if (value < props.min) {
            value = props.min;
        } else if (value > 100) {
            value = 100;
        }
        
        const noOfGamesToAdd = value - props.games.length;

        if (noOfGamesToAdd > 0) {
            props.addGames(createEmptyGames(noOfGamesToAdd))
        } else {
            if(noOfGamesToAdd < 0) {
                const noToRemove = noOfGamesToAdd * -1 > props.emptyGames.length ? props.emptyGames.length: noOfGamesToAdd * -1 ;
                const gamesToRemove = props.emptyGames.splice(props.emptyGames.length - noToRemove, noToRemove);
                props.removeGames(gamesToRemove);
            }
        }
    }

    return (
        <div>
            <NumberOfGamesSelector value={props.games.length} handleChange={handleChange} min={props.min}/>
            <GameTable games={props.games}/>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (GameOverview);