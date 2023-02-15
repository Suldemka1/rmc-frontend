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
    <>
      <Header />
      {document.location.href != process.env.REACT_APP_URL ? (
        <Breadcrumbs localeUrl={localeUrl} />
      ) : (
        <></>
      )}

      <div className="sm:w-full xs:w-full md:w-full lg:w-5/5">{children}</div>
      <Footer />
    </>
  );
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

                <div className="flex flex-row gap-5">
                    <div className="sm:w-full xs:w-full md:w-full lg:w-5/5 py-3">
                        {children}
                    </div>
                    {/* <div className="sm:hidden md:hidden lg:block sm:w-0 xs:w-0 md:w-0 lg:w-1/5 sm:p-0 py-3 pl-3">
                            <Sidebar />
                        </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default StandartLayout;
