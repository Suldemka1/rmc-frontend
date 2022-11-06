import React from 'react';
import {BsClock, BsPersonCircle,} from "react-icons/bs";

const ContactsItem = () => {
    return (
        <div className="grid grid-cols-2 text-lg py-3">

            <div className="">
                <h3 className="font-bold">Справочная служба</h3>
                <div className="flex gap-2 items-center font-normal">
                    <BsPersonCircle />
                    <p>ФИО специалиста</p>
                </div>
            </div>

            <div className="">
                <h4>+7 (900) 375 2405</h4>
                <div className="flex gap-2 items-center">
                    <BsClock />
                    <p>09:00 - 18:00</p>
                </div>
            </div>
        </div>
    );
};

export default ContactsItem;