import { FC } from 'react';
import StandartLayout from "../layouts/StandartLayout";
import ContactsItem from "../components/Contacts/ContactsItem";
import PageName from "../components/PageName";

const Contacts: FC = () => {
    return (
        <StandartLayout localeUrl="Главная/Контакты">
            <div className="flex justify-between">
                <div className="w-full">
                    <PageName title="Контакты" />

                    <ContactsItem
                        title="Справочная служба дежурного/диспетчера министерства топлива и энергетики"
                        subtitle="Фамилия Имя Отчество"
                        phone="83942200000"
                        schedule={{
                            start_time: "9:00",
                            end_time: "18:00"
                        }} />
                    <ContactsItem
                        title="Справочная служба дежурного/диспетчера службы по тарифам"
                        subtitle="Фамилия Имя Отчество"
                        phone={"83942200000"}
                        schedule={{
                            start_time: "9:00",
                            end_time: "18:00"
                        }} />
                    <ContactsItem
                        title="Справочная служба дежурного/диспетчера Центра управления регионо"
                        subtitle="Фамилия Имя Отчество"
                        phone={"83942200000"}
                        schedule={{
                            start_time: "9:00",
                            end_time: "18:00"
                        }} />
                </div>
            </div>
        </StandartLayout>
    );
};

export default Contacts;