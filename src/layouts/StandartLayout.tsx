import React, { FC, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { IPage } from "../models/IChildren";
import Breadcrumbs from "../components/Breadcrumbs";

const StandartLayout: FC<IPage> = ({ children, localeUrl }: IPage) => {
  useEffect(() => {
    console.log(document.location.href);
  }, []);
  return (
    <div className='min-h-screen relative flex flex-col'>
      <Header />
      <div className="container mx-auto flex-1">
        {
          document.location.href != process.env.REACT_APP_URL
            ?
            <Breadcrumbs localeUrl={localeUrl} />
            :
            null
        }

        <div className="flex flex-col sm:w-full xs:w-full md:w-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StandartLayout;
