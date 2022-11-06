import React from 'react';

const Calculator = () => {

    return (
        <div className="flex flex-col gap-5 bg-gray-800 border border-black rounded p-5 my-5">
            <h1 className="text-2xl text-gray-100">Калькулятор рассчета стоимости угля</h1>
            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col gap-1 w-1/2">
                    <div className="">
                        <input type="text" placeholder="Необходимое количество в тоннах" className="input"/>
                        <p className="error">Запрошенное количество не может быть больше остатка на складе</p>
                    </div>
                    <div>
                        <input type="text" placeholder="Введите адресс доставки" className="input"/>
                        <p className="error">error</p>
                    </div>

                    <button className="button">Рассчитать</button>
                </div>

                <div className="w-1/2 [&>h1]:text-white [&>h1]:text-xl">
                    <h1>3998 при самовывозе</h1>
                    <h1>5000 при доставке по адресу</h1>
                    <h1>ориентировочное время доставки 28.11.2022</h1>

                    <h1></h1>
                </div>
            </div>
        </div>
    );
};

export default Calculator;