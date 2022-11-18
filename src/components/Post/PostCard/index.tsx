import React, {FC} from 'react';
import {Link} from "react-router-dom";

const PostCard: FC = () => {
    return (
        <div id="post-card"
             className="
                        border border-black rounded
                        ">

            <div id="post-header" className="text-2xl p-3">
                <h1>Заголовок новости</h1>
            </div>

            <div id="post-body" className="flex sm:flex-col xs:flex-col md:flex-col lg:flex-row gap-3 p-3">
                <div className='sm:hidden md:block'>
                    <img src="/favicon.ico" className="min-w-[150px] max-w-[300px]"/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Orci ac auctor augue mauris augue neque gravida in fermentum. Imperdiet dui
                    accumsan sit amet nulla. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
                    Volutpat odio facilisis mauris sit. Sodales neque sodales ut etiam. Natoque penatibus et magnis dis
                    parturient. Pellentesque adipiscing commodo elit at imperdiet dui.</p>
            </div>

            <div id="post-footer"
                 className="w-100 flex flex-row justify-between items-center bg-blue-400 text-gray-50 p-3 mt-3">
                <p className="font-semibold">Дата публикации: 25.10.2022</p>

                <Link to={`/news/${1}`} className="border-2 border-blue-600 rounded bg-blue-600 px-3 py-2
                hover:bg-blue-700 transition-all
                active:border-blue-900">
                    Читать
                </Link>
            </div>
        </div>
    );
};

export default PostCard;