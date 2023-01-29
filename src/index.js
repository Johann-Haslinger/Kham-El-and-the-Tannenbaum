import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose } from "redux";

import './index.css';
import App from './App';
import { ContextProvider } from "./contexts/ContextProvider";


ReactDOM.render(
    <Provider >
        <ContextProvider>
            <App />
        </ContextProvider>  
    </Provider>,
 
    document.getElementById('root')
);

