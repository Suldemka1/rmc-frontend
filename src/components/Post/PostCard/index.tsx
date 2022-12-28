import React from 'react';
import {Link} from "react-router-dom";
import FormattedDate from "../../FormattedStrings";

const PostCard = (params: any ) => {
    return (
        <div id="post-card"
             className="border border-black rounded">

            <div id="post-header" className="text-2xl p-3">
                <h1>{params.title}</h1>
            </div>

            <div id="post-body" className="flex sm:flex-col xs:flex-col md:flex-col lg:flex-row gap-3">

                <div className='sm:hidden md:block'>
                    <img src={params.preview_image} className="min-w-[150px] max-w-[300px]"/>
                </div>

                <p>{params.short_body}</p>
            </div>

            <div id="post-footer"
                 className="w-100 flex flex-row justify-between items-center bg-blue-400 text-gray-50 p-3">

                <div className="font-semibold">
                    <p>Дата публикации:</p>
                    <FormattedDate date={params.publication_date}/>
                </div>

                <Link to={`/news/${params.id}`} className="border-2 border-blue-600 rounded bg-blue-600 px-3 py-2
                hover:bg-blue-700 transition-all
                active:border-blue-900">
                    Читать
                </Link>
            </div>
        </div>
    );
};

export default PostCard;
