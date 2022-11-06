import React, {FC} from 'react';
import {IChildren} from "../models/IChildren";
import Header from "../components/Header";
import AccountMenu from "../components/Account/AccountMenu";

const AccountLayout: FC<IChildren> = ({children}: IChildren) => {
    return (
        <div className="h-screen">
            <Header/>
            <div className="flex flex-row">
                <div className="w-1/5">
                    <AccountMenu/>
                </div>
                <div className="w-4/5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;