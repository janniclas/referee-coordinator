import React from 'react';
import './App.css';
import RefereeInput from './RefereeInput/RefereeInput';
import { AppState } from './store/store';
import { RefereeState } from './store/refereeReducer';
import { connect } from 'react-redux';
import RefereeList from './RefereeList/RefereeList';

interface AppProps {
  referees: RefereeState
}
const mapStateToProps = (state: AppState) => ({
  referees: state.referee
})

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <RefereeInput></RefereeInput>
      <RefereeList></RefereeList>
    </div>
  );
}

export default connect(mapStateToProps)(App);
