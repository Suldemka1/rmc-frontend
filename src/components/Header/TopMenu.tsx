import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";

const TopMenu = () => {
    const state = useAppSelector(state => state.auth)

    return (
        <menu className="flex flex-row justify-between gap-3 uppercase [&>li]:h-fit">
            {
                menuRoutes.map((item: ITopMenu) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }

            {
                state.isAuth
                    ?
                    <li>
                        <Link to="/account" className=" bg-gray-800 text-gray-300 rounded px-3 py-2">
                            {`${state.surname} ${state.name}`}
                        </Link>
                    </li>
                    :
                    <li>
                        <Link to="/signin">
                            Авторизация
                        </Link>
                    </li>
            }
        </menu>
    );
};

interface ITopMenu {
    id: number,
    name: string,
    to: string
}

const menuRoutes = [
    {
        id: 0,
        name: 'главная',
        to: '/'
    },
    {
        id: 1,
        name: 'новости',
        to: '/news'
    },
    {
        id: 2,
        name: 'Карта угольных складов',
        to: '/warehouses'
    },
    {
        id: 3,
        name: 'контакты',
        to: '/Contacts'
    }
]

export default TopMenu;