import { FC } from 'react';
import MobileMenu from './MobileMenu';
import TopMenu from "./TopMenu";

const Header: FC = () => {
    return (
        <header className="sticky top-0 min-h-[100px] bg-blue-500 flex flex-column items-center" style={{ zIndex: 401 }}>
            <div className="container mx-auto flex flex-row justify-between items-center text-white font-semibold">
                <div className="md:w-2/5 sm:w-5/5 xs:w-5/5 xs:text-2xl md:text-3xl font-bold select-none cursor-pointer">
                    <a href='/'>
                        <h1 className='word-wrap'>Интерактивная карта угольных складов Республики Тыва</h1>
                    </a>
                </div>
                <div className='sm:hidden md:block'>
                    <TopMenu />
                </div>
                <div className='sm:block md:hidden'>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;