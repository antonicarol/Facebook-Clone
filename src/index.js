import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {UserContextProvider} from './contexts/UserContext'
import reducer,{ initialState } from './contexts/reducer';

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider initialState={initialState} reducer={reducer}>
    <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
