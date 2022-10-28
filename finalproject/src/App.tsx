import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RegisterPage from "./Comonents/Registration form/Register page";
import {AppRootStateType} from "./BLL/store";
import {AppStateType} from "./BLL/app-reduser";
import {useDispatch, useSelector} from 'react-redux';

export function App() {
    const login = useSelector<AppRootStateType, AppStateType>(state => state.login)
    const dispatch = useDispatch();

  return (
    <div className="App">
        <button> on click</button>
      <RegisterPage/>
    </div>
  )
}

export default App;