import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {Link} from "react-router-dom";

const SignInPage = () => {
    const state = useAppSelector(state => state.map)
    const dispatch = useAppDispatch()

    return (
        <div
            className="container mx-auto flex flex-col justify-center items-center max-w-screen max-h-screen min-h-screen min-h-screen">
            <div>

            </div>
            <form className="flex flex-col justify-center items-center gap-5 w-1/3">
                <div className="w-full text-2xl font-semibold">
                    <h1>Авторизация</h1>
                </div>

                <input type="text" placeholder="Логин"
                       className="w-full border border-blue-400 rounded p-3"/>
                <input type="password" placeholder="Пароль"
                       className="w-full border border-blue-400 rounded p-3"/>

                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col">
                        <Link to="/">Зарегистрироваться</Link>
                        <Link to="/">Забыли пароль?</Link>
                    </div>
                    <button className="text-white bg-blue-400 rounded px-4 py-2">
                        Войти
                    </button>
                </div>

            </form>
        </div>
    );
};

export default SignInPage;