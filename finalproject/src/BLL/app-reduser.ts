import React from 'react';
import  {SetIsLoggedAT} from "./login-reducer";
import {authApi} from "../api/api";
import {Dispatch} from "redux";

export type AppStateType = {
    isLoading: boolean;
    isLogged: boolean
}
export type SetIsLoadingAT = {
    type: 'SET-IS-LOADING',
    value: boolean
}
const initState: AppStateType = {
    isLoading: false,
    isLogged: false
};
type ActionType = SetIsLoadingAT | SetIsLoggedAT



export const setIsLoggedAC = (value: boolean) => {
    return {type: 'SET-IS-LOGGED', value}
}

export const authMeTC = () => {
    return (dispatch: Dispatch) => {
        authApi.me()
            .then(() => {
                dispatch(setIsLoggedAC(true))
            })
            .catch(() => {
                dispatch(setIsLoggedAC(false))
            })
    }

}
export const loginTC = (telegramId:number, login: string, password: string) => {
    return (dispatch: Dispatch) => {
        authApi.login(telegramId, login, password)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                dispatch(setIsLoggedAC(true))
            })
            .catch(() => {
                dispatch(setIsLoggedAC(false))
            })
    }
}
export const appReducer = (state: AppStateType = initState, action: ActionType): AppStateType => {

    switch (action.type) {
        case 'SET-IS-LOADING':
            const copyState = {...state};
            copyState.isLoading = action.value
            return copyState

        case 'SET-IS-LOGGED': {
            const copyState = {...state};
            copyState.isLogged = action.value
            return copyState
        }
        default:
            return state
    }
}


export const setIsLoadingAC = (value: boolean) => {
    return {type: 'SET-IS-LOADING', value}
}

