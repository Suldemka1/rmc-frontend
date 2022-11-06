import React from 'react';
import {Link} from "react-router-dom";

const ListItem = () => {
    return (
        <li className="border border-black rounded">
            <div className="flex flex-col">
                <div className="font-semibold text-xl p-3">
                    <h2>Название склада</h2>
                </div>
                <div className="p-3">
                    <p>Адрес склада</p>
                </div>
                <div className="flex flex-row justify-between items-center bg-blue-400 text-white p-3">
                    <div>
                        <p>Контакты склада</p>
                        <p>Рабочие часы</p>
                    </div>

                    <div>
                        <Link to="/warehouses/1">Перейти</Link>
                    </div>
                </div>

            </div>
        </li>
    );
};

export default ListItem;