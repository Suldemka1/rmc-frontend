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
};

export default StandartLayout;
