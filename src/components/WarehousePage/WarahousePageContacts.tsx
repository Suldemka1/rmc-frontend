import React from 'react';
import {MdEmail, MdPhone} from "react-icons/md";

const WarahousePageContacts = ({region, Address}: any) => {
    return (
        <div className="flex flex-col gap-3 text-lg">
            <h1 className="text-2xl">Контактная информация склада</h1>
            <div>{Address.code}, {region.title}, {Address.region}, улица {Address.street}, дом {Address.house}</div>
            <div>
                <div className="flex items-center gap-2">
                    <MdEmail className="w-7 h-7"/>
                    <a href="mailto: suldemka1@gmail.com">
                        someemail@mail.ru
                    </a>

                </div>
                <div className="flex items-center gap-2">
                    <MdPhone className="w-7 h-7"/>
                    +7 (999) 124 6677
                </div>
            </div>

            <div>
                <p>пн-пт</p>
                <p>09:00 - 18:00</p>
                <p>сб-вс - выходные</p>
            </div>
            <div>Заведующий складом: Фамилия Имя Отчество</div>
        </div>
    );
};

export default WarahousePageContacts;