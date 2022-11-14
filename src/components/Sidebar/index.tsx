import React from 'react';
import Banner from "./Banner";

const Sidebar = () => {
    return (
        <div className="flex flex-col gap-5 py-3">
            <Banner id={1} title="" src='/coal-vagon.jpg'/>
            <Banner id={1} title="" src='/coal-station.png'/>
        </div>
    );
};

export default Sidebar;