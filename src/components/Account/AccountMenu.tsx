import React from 'react';
import AccountMenuItem from "./AccountMenuItem";

const AccountMenu = () => {


    return (
        <div className="h-full">
            <div className="flex flex-col gap-5 h-full bg-blue-500 p-3">
                <AccountMenuItem title="Настройки аккаунта" url="/account/settings"/>
                <AccountMenuItem title="Мои обращения" url="/account/appeals"/>
                <AccountMenuItem title="Написать письмо" url="/account/newappeal"/>
            </div>
        </div>
    );
};

export default AccountMenu;