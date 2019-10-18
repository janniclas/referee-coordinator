import React from 'react';
import './App.css';
import RefereeInput from './Inputs/RefereeInput/RefereeInput';
import { connect } from 'react-redux';
import TeamInput from './Inputs/TeamInput/TeamInput';
import { RefereeList, TeamList } from './ObjectList/ObjectList';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import GameOverview from './Games/GamesOverview';
import { mapObjDispatchToProps, ObjFormProps } from './Inputs/ObjectForm';
import { Game } from './types/game';
import { ObjectType } from './types/types';



const App = (props: ObjFormProps<Game>) => {
  props.saveObj({id: '' + Math.random(), type: ObjectType.GAME})
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <RefereeInput/>
        <RefereeList/>
        <TeamInput/>
        <TeamList/>
        <GameOverview/>
      </DndProvider>
    </div>
  );
}

export default connect(null, mapObjDispatchToProps)(App);
