import React, {FC} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import {IChildren} from "../models/IChildren";


const StandartLayout: FC<IChildren> = ({children}: IChildren) => {
    return (
        <>
            <Header/>

            <div className="container mx-auto">
                <div className="flex flex-row gap-5">
                    <div className="sm:w-full xs:w-full md:w-4/5 py-3">
                        {children}
                    </div>
                    <div className="sm:hidden md:block sm:w-0 xs:w-0 md:w-1/5 sm:p-0 py-3 pl-3">
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default StandartLayout;