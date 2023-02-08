import { useState } from "react";
import { Link } from "react-router-dom";
import { IWarehouse } from "../../models/IWarehouse";

const TopMenu = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
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

            <li className="group inline-flex cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                Склады
                <div className={`${dropdown ? "block" : "hidden"} relative mt-5`}>

                    <div className="absolute right-0 z-10 w-56 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg p-2">
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №1
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №2
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №3
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №1
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №2
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №3
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №1
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №2
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №3
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №1
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №2
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №3
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №1
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №2
                        </Link>
                        <Link to="/"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            Склад №3
                        </Link>
                    </div>
                </div>
            </li>
            <li>
                <Link to="/contacts">
                    контакты
                </Link>
            </li>
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
    }
]

export default TopMenu;