import React from 'react';
import './App.css';
import RefereeInput from './Inputs/RefereeInput/RefereeInput';
import { AppState } from './store/store';
import { connect } from 'react-redux';
import { ObjectState } from './store/objectReducer';
import { Referee } from './types/referee';
import GameInput from './Inputs/TeamInput/TeamInput';
import ObjectList from './ObjectList/ObjectList';
import { Team } from './types/team';

interface AppProps {
  referees: ObjectState<Referee>
  teams: ObjectState<Team>
}
const mapStateToProps = (state: AppState) => ({
  referees: state.referee,
  teams: state.team
})

const App: React.FC<AppProps> = (props: AppProps) => {
  const teamList = ObjectList<Team>(props.teams);
  const refList = ObjectList<Referee>(props.referees);
  return (
    <div className="App">
      <RefereeInput></RefereeInput>
      {refList}
      <GameInput></GameInput>
      {teamList}
    </div>
  );
}

export default connect(mapStateToProps)(App);
