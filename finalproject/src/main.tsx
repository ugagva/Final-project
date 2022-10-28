import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {store} from "./BLL/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./Comonents/Login form/Login page";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 <Provider store ={store}>
     <BrowserRouter>
         <Routes>
             <App/>
             {/*<Route path="/" element={<App/>}/>*/}
             {/*<Route path="/auth" element={<LoginPage/>}/>*/}
             {/*<Route path="*" element={<App/>}/>*/}
         </Routes>
     </BrowserRouter>
 </Provider>

)
