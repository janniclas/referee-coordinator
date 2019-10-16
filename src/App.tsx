import React from 'react';
import './App.css';
import RefereeInput from './Inputs/RefereeInput/RefereeInput';
import { AppState } from './store/store';
import { connect } from 'react-redux';
import { ObjectState } from './store/objectReducer';
import { Referee } from './types/referee';
import TeamInput from './Inputs/TeamInput/TeamInput';
import { Team } from './types/team';
import { RefereeList, TeamList } from './ObjectList/ObjectList';
import GameTable from './Games/GameTable';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

interface AppProps {
  referees: ObjectState<Referee>
  teams: ObjectState<Team>
}
const mapStateToProps = (state: AppState) => ({
  referees: state.referee,
  teams: state.team
})

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <RefereeInput/>
        <RefereeList/>
        <TeamInput/>
        <TeamList/>
        <GameTable/>
      </DndProvider>
    </div>
  );
}

export default connect(mapStateToProps)(App);
