import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {Navigate} from "react-router-dom";
import {loginTC} from "../../BLL/app-reduser";
import {AppRootStateType} from "../../BLL/store";


const LoginPage = () => {
    const isLogged = useSelector<AppRootStateType, boolean>(state => state.app.isLogged);
    const dispatch = useDispatch<any>()


    const formik = useFormik(
        {
        initialValues: {
            telegramId:`635b8f3aa6ddba001ea3f9b9`,
            login: 'jgorelova@mail.ru',
            password: '1qazxcvBG',
        },
        onSubmit: ({telegramId, login, password}) => {
            dispatch(loginTC(telegramId, login, password));
        },
    });
    if (isLogged) {
        return <Navigate to={'/packslist'}/>
    }
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">telegramId</label>
            <input
                id="telegramId"
                name="telegramId"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.telegramId}
            />
            <label htmlFor="lastName">Login</label>
            <input
                id="login"
                name="login"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.login}
            />
            <label htmlFor="email">password</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginPage;