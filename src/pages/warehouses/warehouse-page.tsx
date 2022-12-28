import React, { useEffect, useState } from "react";
import PageName from "../../components/PageName";
import BriefDescription from "../../components/WarehousePage/BriefDescription";
import WarahousePageContacts from "../../components/WarehousePage/WarahousePageContacts";
import Calculator from "../../components/WarehousePage/Calculator";
import WarehousePageFootnotes from "../../components/WarehousePage/WarehousePageFootnotes";
import StandartLayout from "../../layouts/StandartLayout";
import { useParams } from "react-router-dom";
import { IWarehouse } from "../../models/IWarehouse";

const WarehousePage = () => {
  const params = useParams();

  const [state, setState] = useState<IWarehouse>({
    id: 0,
    title: "",
    owner: "",
    url: "",
    brief: {
      lowest_coal_cost: "",
      devivery_cost: "",
      average_delivery_time: "",
      coal_remainder: "",
    },
    contacts: [
      {
        id: 0,
        phone: "",
        email: "",
        webSiteUrl: "",
      },
    ],
    region: {
      id: 0,
      title: "",
    },
    address: {
      code: "",
      region: "",
      street: "",
      house: "",
      note: "",
    },
    // @ts-ignore
    schedule: [],
    payment_options: [
      {
        option: "",
      },
    ],
  });

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/api/warehouses/${params.id}?populate=*`
    )
      .then((res) => res.json())
      .then((res) => setState(res.data));
  }, []);

  return (
    <StandartLayout>
      <PageName title={state?.title} />

      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between gap-5">
          <BriefDescription brief={state?.brief} />
          {/* <img src="/favicon.ico" className="w-1/5" /> */}
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <h1 className="text-2xl">Услуги и оплата</h1>
          <div className="">
            <details>
              <summary className="summary">Прейскурант цен на уголь</summary>
              <div>
                <ul>
                  <li className="grid grid-cols-2">
                    <p>Каа-Хемский</p>
                    <p>2734₽</p>
                  </li>
                </ul>
              </div>
            </details>
          </div>

          <div>
            <details>
              <summary className="summary">Способы оплаты</summary>
              <div className="px-3 py-2">
                <ul>
                  {state.payment_options.map((item, index) => {
                    return (
                      <li key={index} className="">
                        {item.option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </details>
          </div>
        </div>

        <WarahousePageContacts
          contacts={state.contacts[0]}
          region={state.region}
          address={state.address}
          schedule={state.schedule}
        />
      </div>

      <Calculator />
      <WarehousePageFootnotes />
    </StandartLayout>
  );
};

export default WarehousePage;
