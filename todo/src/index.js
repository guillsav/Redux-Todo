import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

import App from './App';
import './index.css';

const saveTolocalStorge = state => {
  try {
    const json = JSON.stringify(state);
    localStorage.setItem('state', json);
  } catch (e) {
    console.log(e);
  }
};

const loadfromLocalStorage = () => {
  try {
    const state = localStorage.getItem('state');
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const stateToLocalStorage = loadfromLocalStorage();

const store = createStore(
  rootReducer,
  stateToLocalStorage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveTolocalStorge(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
