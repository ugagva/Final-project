import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import {loginReducer} from "./login-reducer";

import {forgotPassReducer} from "./foget-pass-reducer";
import {appReducer} from "./app-reduser";
import {registrationReducer} from "./register-reducer";

const rootReducer = combineReducers({
    register: registrationReducer,
    login: loginReducer,
    forgotPassword: forgotPassReducer,
    app: appReducer,

})


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>
