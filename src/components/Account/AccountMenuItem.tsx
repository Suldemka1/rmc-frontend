import React, {FC} from 'react';
import {Link} from "react-router-dom";

export interface IAccountMenuItem {
    title: string
    url: string
}

const AccountMenuItem: FC<IAccountMenuItem> = ({title, url}: IAccountMenuItem) => {
    return (
        <Link to={url} className="text-gray-100 font-semibold rounded px-3 py-2 cursor-pointer">{title}</Link>
    );
};

export default AccountMenuItem;