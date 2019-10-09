import React from 'react';
import './App.css';
import RefereeInput from './Inputs/RefereeInput/RefereeInput';
import { AppState } from './store/store';
import { connect } from 'react-redux';
import RefereeList from './RefereeList/RefereeList';
import { ObjectState } from './store/objectReducer';
import { Referee } from './types/referee';
import GameInput from './Inputs/GameInput/GameInput';

interface AppProps {
  referees: ObjectState<Referee>
}
const mapStateToProps = (state: AppState) => ({
  referees: state.referee
})

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <RefereeInput></RefereeInput>
      <RefereeList></RefereeList>
      <GameInput></GameInput>
    </div>
  );
}

export default connect(mapStateToProps)(App);
