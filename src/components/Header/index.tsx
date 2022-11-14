import {FC} from 'react';
import TopMenu from "./TopMenu";

const Header: FC = () => {
    return (
        <header className="sticky top-0 min-h-[100px] bg-blue-500 flex flex-column items-center" style={{zIndex: 401}}>
            <div className="container mx-auto flex flex-row justify-between items-center text-white font-semibold">
                <div className="text-3xl font-bold select-none cursor-pointer">
                    <h1>Интерактивная карта угольных складов</h1>
                </div>
                <div>
                    <TopMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;