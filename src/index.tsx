import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { rootReducer } from './store/store';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(
  rootReducer,
  composeEnhancers()
  );


ReactDOM.render(  
    <Provider store={store}>
        <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
