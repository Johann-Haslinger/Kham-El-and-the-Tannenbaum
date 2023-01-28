import React from "react";
import reportWebVitals from "./reportWebVitals ";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import reducers from "./reducers"

import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <ContextProvider>
            <App />
        </ContextProvider>  
    </Provider>,
 
    document.getElementById('root')
);

reportWebVitals();
