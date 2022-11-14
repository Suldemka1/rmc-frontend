import React from 'react';

interface IBanner {
    id: number
    title: string
    src: string
}

const Banner = (params : IBanner) => {
    return (
        <div>
            <img src={params.src} className="w-full"/>
        </div>
    );
};

export default Banner;