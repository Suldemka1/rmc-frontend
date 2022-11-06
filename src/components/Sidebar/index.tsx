import React from 'react';
import Banner from "./Banner";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-5">
            <Banner />
            <Banner />
            <Banner />
            <Banner />
        </div>
    );
};

export default Sidebar;