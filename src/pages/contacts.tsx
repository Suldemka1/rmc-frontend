import React, {FC} from 'react';
import StandartLayout from "../layouts/StandartLayout";
import ContactsItem from "../components/Contacts/ContactsItem";
import WarehouseContactItem from "../components/Contacts/WarehouseContactItem";
import PageName from "../components/PageName";

const Contacts: FC = () => {
    return (
        <StandartLayout>
            <div className="flex justify-between">
                <div className="w-full">
                    <PageName title="Контакты"/>

                    {[1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <ContactsItem key={item}/>
                        )
                    })}

                    <h1 className="text-3xl py-3">Контакты складов</h1>

                    {[1,2,3,4,5,6].map((item) => {
                        return (
                            <WarehouseContactItem  key={item}/>
                        )
                    })}
                </div>
            </div>



        </StandartLayout>
    );
};

export default Contacts;