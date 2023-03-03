import React, { useEffect, useState } from "react";
import PageName from "../../components/PageName";
import BriefDescription from "../../components/Warehouses/WarehousePage/Brief";
import WarahousePageContacts from "../../components/Warehouses/WarehousePage/Contacts";
import Calculator from "../../components/Warehouses/WarehousePage/Calculator";
import WarehousePageFootnotes from "../../components/Warehouses/WarehousePage/Footnotes";
import StandartLayout from "../../layouts/StandartLayout";
import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router-dom";
import {
  IProduct,
  ISchedule,
  IWarehouse,
} from "../../models/IWarehouse";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchWarehouse } from "../../store/slices/warehouseSlice/services";
import { v4 as uuidv4 } from 'uuid'

const WarehousePage = () => {
  const params = useParams();
  const res = useLoaderData() as IWarehouse;

  const [id, setId] = useState(0)
  const state = useAppSelector((state) => state.singleWarehouse)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setId(Number(params.id))
    dispatch(fetchWarehouse(params.id))
  }, []);

  return (
    <StandartLayout localeUrl={`Главная/Склады/${res.id}`}>
      <PageName title={res.title} />
      {
        state.status != "fulfilled" ? <div>loading</div> : <>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-between gap-5">
              <BriefDescription brief={res.brief} />
              <WarahousePageContacts
                contacts={res.contacts[0]}
                region={res.region}
                address={res.address}
                schedule={res.schedule}
              />
            </div>

            <div className="flex flex-col gap-3 text-lg">
              <h1 className="text-2xl">Услуги и оплата</h1>
              <div className="w-full grid grid-cols-3 gap-3">
                {
                  res.coal_products &&
                  <div className="rounded border-2 border-black">
                    <h1 className="text-xl font-semibold  py-3 px-2">
                      Прейскурант цен на уголь
                    </h1>
                    <ul className="">
                      {res.coal_products?.map((item: IProduct) => {
                        return (
                          <li
                            key={item.id}
                            className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3"
                          >
                            <p>{item.name}</p>
                            <p>{item.price}₽</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                }
                {
                  res.additional_services &&
                  <div className="rounded border-2 border-black">
                    <h1 className="text-xl font-semibold  py-3 px-2">
                      Дополнительные услуги
                    </h1>
                    <ul className="">
                      {res.additional_services?.map((item: any) => {
                        return (
                          <li
                            key={item.id}
                            className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3"
                          >
                            <div>fuck</div>
                            <p>{item.title}</p>
                            <p>{item.price}₽</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                }
                {
                  res.payment_options &&
                  <div className="w-3/5 rounded border-2 border-black">
                    <h1 className="text-xl font-semibold py-3 px-2">Способы оплаты</h1>
                    <div className="">
                      <ul>
                        {res.payment_options?.map((item) => {
                          return (
                            <li
                              key={item.option}
                              className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3"
                            >
                              {item.option}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div>
              <h1 className="font-semibold text-xl py-3">График работы склада</h1>
              <div className="xs:grid md:grid sm:grid-rows-7 xs:grid-cols-2 md:grid-cols-7 justify-between border-2 border-black rounded">
                {res.schedule?.map((item: ISchedule) => {
                  return (
                    <span key={uuidv4()} className="grid sm:grid-cols-2 sm:grid-rows-none xs:grid-cols-none xs:grid-rows-2 md:grid-rows-2 odd:text-white odd:bg-blue-500 p-3">
                      <p>{item?.day}</p>
                      <p>{item?.time}</p>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {
            res.coal_products && res.delivery &&
            <Calculator
              coal_products={res.coal_products}
              delivery={res.delivery}
            />
          }

        </>
      }

      <WarehousePageFootnotes />
    </StandartLayout>
  );
};

export const warehousePageLoader = async ({ params }: LoaderFunctionArgs): Promise<IWarehouse> => {
  console.log(params.id)
  const res = await fetch(`${process.env.REACT_APP_BASEURL}/api/warehouses/${params.id}?populate=*`)
    .then((res) => res.json())
    .then((res) => res.data)

  return res
}

export default WarehousePage;
