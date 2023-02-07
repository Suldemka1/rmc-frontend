import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { ISchedule } from "../../../models/IWarehouse";

const WarahousePageContacts = ({
  region,
  address,
  contacts,
  schedule,
}: any) => {
  return (
    <div className="flex flex-col gap-3 text-lg">
      <h1 className="text-2xl">Контактная информация склада</h1>
      <div>
        {address?.code}, {region?.title}, {address?.region}, улица{" "}
        {address?.street}, дом {address?.house}
      </div>
      <div>
        {contacts?.email ? (
          <div className="flex items-center gap-2">
            <MdEmail className="w-7 h-7" />
            <a href={`mailto: ${contacts?.email}`}>{contacts?.email}</a>
          </div>
        ) : (
          null
        )}

        <div className="flex items-center gap-2">
          <MdPhone className="w-7 h-7" />
          <a href={`tel: ${contacts?.phone}`}>{contacts?.phone}</a>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl py-3">График работы склада</h1>
        <div className="xs:grid md:grid sm:grid-rows-7 xs:grid-cols-2 md:grid-cols-7 justify-between border-2 border-black rounded">
          {schedule?.map((item: ISchedule) => {
            return (
              <span key={item?.id} className="grid sm:grid-cols-2 sm:grid-rows-none xs:grid-cols-none xs:grid-rows-2 md:grid-rows-2 odd:text-white odd:bg-blue-500 p-3">
                <p>{item?.day}</p>
                <p>{item?.time}</p>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WarahousePageContacts;
