import React, { useEffect, useState } from "react";
import PageName from "../../components/PageName";
import BriefDescription from "../../components/WarehousePage/BriefDescription";
import WarahousePageContacts from "../../components/WarehousePage/WarahousePageContacts";
import Calculator from "../../components/WarehousePage/Calculator";
import WarehousePageFootnotes from "../../components/WarehousePage/WarehousePageFootnotes";
import StandartLayout from "../../layouts/StandartLayout";
import { useParams } from "react-router-dom";
import { IProduct, IWarehouse } from "../../models/IWarehouse";

const WarehousePage = () => {
  const params = useParams();

  const [state, setState] = useState<IWarehouse>({
    id: 0,
    title: "",
    owner: "",
    url: "",
    brief: {
      lowest_coal_cost: 0,
      devivery_cost: 0,
      average_delivery_time: 0,
      coal_remainder: 0,
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
    schedule: [
      {
        id: 0,
        day: "",
        time: ""
      }
    ],
    payment_options: [
      {
        option: "",
      },
    ],
    coal_products: [
      {
        id: 0,
        name: "Каа-Хемский уголь",
        coal_price: 2774,
        coal_remainder: 100
      }
    ]
  });

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/api/warehouses/${params.id}?populate=*`
    )
      .then((res) => res.json())
      .then((res) => setState(res.data));
  }, []);

  return (
    <StandartLayout localeUrl={`Главная/Склады/${params.id}`}>
      <PageName title={state?.title} />

      <div className="flex flex-col gap-10">
        <div className="flex flex-row justify-between gap-5">
          <BriefDescription brief={state?.brief} />
          {/* <img src="/favicon.ico" className="w-1/5" /> */}
        </div>

        <div className="flex flex-col gap-3 text-lg">
          <h1 className="text-2xl">Услуги и оплата</h1>
          <div className="w-3/5 rounded border-2 border-black">
            <h1 className="text-xl font-semibold  py-3 px-2">Прейскурант цен на уголь</h1>
            <ul className="">
              {state?.coal_products?.map((item: IProduct) => {
                return (
                  <li key={item.id} className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3">
                    <p>{item.name}</p>
                    <p>{item.coal_price}₽</p>
                  </li>
                )

              })

                // <li className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3">
                //   <p>Каа-Хемский</p>
                //   <p>2734₽</p>
                // </li>
                // <li className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3">
                //   <p>Каа-Хемский</p>
                //   <p>2734₽</p>
                // </li>
              }

            </ul>
          </div>

          <div className="w-3/5 rounded border-2 border-black">
            <h1 className="text-xl font-semibold py-3 px-2">Способы оплаты</h1>
            <div className="">
              <ul>
                {state.payment_options.map((item, index) => {
                  return (
                    <li key={item.option} className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3">
                      {item.option}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <WarahousePageContacts
          contacts={state.contacts[0]}
          region={state.region}
          address={state.address}
          schedule={state.schedule}
        />
      </div>

      <Calculator
        coal_price={state.coal_products[0].coal_price}
        quantity={undefined}
        coal_remainder={state.brief.coal_remainder}
        coal_products={state.coal_products}
        delievery_price={state.brief.devivery_cost}
        average_delievery_time={state.brief.average_delivery_time} />
      <WarehousePageFootnotes />
    </StandartLayout>
  );
};

export default WarehousePage;
