import React from 'react';
import './App.css';
import RefereeInput from './RefereeInput/RefereeInput';
import { AppState } from './store/store';
import { RefereeState } from './store/refereeReducer';
import { addReferee } from './store/refereeActions';

const mapStateToProps = (state: AppState) => ({
  referee: state.referee
})

export interface AppProps {
  addReferee: typeof addReferee
  referee: RefereeState
}
const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <RefereeInput></RefereeInput>
    </div>
  );
}

export default App;
