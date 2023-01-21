import {Link} from "react-router-dom";

const TopMenu = () => {

    return (
        <menu className="sm:hiddre md:flex flex-row justify-between gap-3 uppercase [&>li]:h-fit">
            {
                menuRoutes.map((item: ITopMenu) => {
                    return (
                        <li key={item.to}>
                            <Link to={item.to}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }

            {/* {
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
            } */}
        </menu>
    );
};

export interface ITopMenu {
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
        name: 'Склады',
        to: '/warehouses'
    },
    {
        id: 3,
        name: 'контакты',
        to: '/Contacts'
    }
]

export default TopMenu;