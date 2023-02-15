import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchAllWarehouses } from "../../store/slices/warehouseSlice/services";
import SearchField from "./SearchField";

const TopMenu = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const warehouses = useAppSelector((state) => state.warehouses)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllWarehouses())
    }, [])

    return (
        <>
            <menu className="sm:hiddre md:flex flex-row justify-between gap-3 uppercase [&>li]:h-fit [&>li]:select-none">
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
                    Угольные склады
                </li>
                <li>
                    <Link to="/contacts">
                        контакты
                    </Link>
                </li>

                <SearchField />
            </menu>
            <div className={`${dropdown ? "block" : "hidden"} absolute left-0 right-0 mt-6`}>
                <div className="bg-blue-500 absolute left-0 right-0 z-10 origin-top-right text-white rounded-md shadow-lg">
                    <div className="container mx-auto flex gap-3 flex-wrap justify-start py-3">
                        {
                            warehouses?.warehouses?.data?.map((item: any) => {
                                return <Link key={item.id} to={`/warehouses/${item.id}`}
                                    className="block text-md text-white rounded-lg hover:bg-gray-50 hover:text-gray-700 px-2 py-2"
                                >
                                    {item.title}
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </>

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