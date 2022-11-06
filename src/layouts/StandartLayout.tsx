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
                <div className="flex flex-row">
                    <div className="w-4/5 py-3 pr-3">
                        {children}
                    </div>
                    <div className="w-1/5 py-3 pl-3">
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default StandartLayout;