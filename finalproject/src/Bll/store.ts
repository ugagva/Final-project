import React from 'react';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {loginReducer} from "./login-reducer";
import {signInReducer} from "./sign-in-reducer";
import {fogetPassReducer} from "./foget-pass-reducer";

const rootReducer  =combineReducers ({
login:loginReducer,
signIn:signInReducer,
forgotPassword:fogetPassReducer,
})


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>
