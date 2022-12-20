import React, {FC} from 'react';

interface IPageName {
    title: string | null | undefined
}

const PageName : FC<IPageName> = (params: IPageName) => {
    return (
        <div className="font-normal text-3xl select-none pb-3">
            <h1>{params.title}</h1>
        </div>
    );
};

export default PageName;
