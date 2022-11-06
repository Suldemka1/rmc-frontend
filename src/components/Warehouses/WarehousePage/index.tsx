import React from 'react';
import PageName from "../../PageName";
import StandartLayout from "../../../layouts/StandartLayout";
import Calculator from "../Calculator";
import {MdEmail, MdPhone} from "react-icons/md";
import BriefDescription from "./BriefDescription";
import WarahousePageContacts from "./WarahousePageContacts";
import WarehousePageFootnotes from "./WarehousePageFootnotes";

const WarehousePage = () => {


    return (
        <StandartLayout>
            <PageName title="Название склада"/>

            <div className="flex flex-col gap-10">

                <div className="flex flex-row justify-between gap-5">
                    <BriefDescription/>
                    <img src="/favicon.ico" className="w-1/5"/>
                </div>

                <div className="flex flex-col gap-3 text-lg">
                    <h1 className="text-2xl">Услуги и оплата</h1>
                    <div className="">
                        <details>
                            <summary className="summary">
                                Прейскурант цен на уголь
                            </summary>
                            <div>
                                <ul>
                                    <li className="grid grid-cols-2"><p>Сорт угля</p><p>1999Р</p></li>
                                </ul>
                            </div>
                        </details>
                    </div>
                    <div className="">
                        <details>
                            <summary className="summary">Дополнительные услуги</summary>
                            <div className="text-lg">
                                <ul className="flex flex-col gap-3 p-3">
                                    {[1, 2, 3, 4, 5, 6].map((item) =>
                                        <li key={item}>Дополнительная услуга №{item}</li>
                                    )}
                                </ul>
                            </div>
                        </details>
                    </div>

                    <div>
                        <details>
                            <summary className="summary">Способы оплаты</summary>
                            <div>
                                <ul>
                                    <li>Наличный рассчет</li>
                                    <li>Безналичный рассчет</li>
                                    <li>Переводом на банковскую карту</li>
                                    <li>По договору</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>

                <WarahousePageContacts/>
            </div>

            <Calculator/>
            <WarehousePageFootnotes/>
        </StandartLayout>
    );
};

export default WarehousePage;