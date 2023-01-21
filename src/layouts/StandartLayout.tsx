import React, { FC } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { IPage } from "../models/IChildren";
import WelcomePopup from '../components/WelcomePopup';
import Breadcrumbs from '../components/Breadcrumbs';

const StandartLayout: FC<IPage> = ({ children, localeUrl }: IPage) => {
    return (
        <div>
            {/* <WelcomePopup /> */}
            <div>
                <Header />
                <div className="container mx-auto">
                    {
                        document.location.href != process.env.URL
                            ?
                            <Breadcrumbs localeUrl={localeUrl} />
                            :
                            null
                    }

                    <div className="flex flex-row gap-5">
                        <div className="sm:w-full xs:w-full md:w-full lg:w-4/5 py-3">
                            {children}
                        </div>
                        <div className="sm:hidden md:hidden lg:block sm:w-0 xs:w-0 md:w-0 lg:w-1/5 sm:p-0 py-3 pl-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default StandartLayout;