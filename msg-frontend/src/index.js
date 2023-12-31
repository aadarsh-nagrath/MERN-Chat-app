import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// we need to have - react redux now to link our react app with redux
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/es/integration/react";
import persistStore from 'redux-persist/es/persistStore';
import store from './store';

//now rendering store

const persistedStore = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      //now we need store to persist
      <PersistGate  loading={null} persistor={persistedStore} >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
