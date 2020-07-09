import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "./index.css";
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { fetchProperties } from './actions';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(fetchProperties())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
