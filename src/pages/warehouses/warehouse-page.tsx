import React, { useEffect, useState } from "react";
import PageName from "../../components/PageName";
import BriefDescription from "../../components/Warehouses/WarehousePage/Brief";
import WarahousePageContacts from "../../components/Warehouses/WarehousePage/Contacts";
import Calculator from "../../components/Warehouses/WarehousePage/Calculator";
import WarehousePageFootnotes from "../../components/Warehouses/WarehousePage/Footnotes";
import StandartLayout from "../../layouts/StandartLayout";
import { useParams } from "react-router-dom";
import {
  IAdditionalService,
  IProduct,
} from "../../models/IWarehouse";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchWarehouse } from "../../store/slices/warehouseSlice/services";

const WarehousePage = () => {
  const params = useParams();
  const state = useAppSelector((state) => state.singleWarehouse)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWarehouse(params.id))
  }, []);

  useEffect(() => {
    setTimeout(() => console.log(state.data?.delivery), 1000)

  }, [])

  return (
    <StandartLayout localeUrl={`Главная/Склады/${params.id}`}>
      <PageName title={state?.data?.title} />
      {
        state.status != "fulfilled" ? <div>loading</div> : <>

          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-between gap-5">
              <BriefDescription brief={state?.data?.brief} />
            </div>

            <div className="flex flex-col gap-3 text-lg">
              <h1 className="text-2xl">Услуги и оплата</h1>
              <div className="w-3/5 rounded border-2 border-black">
                <h1 className="text-xl font-semibold  py-3 px-2">
                  Прейскурант цен на уголь
                </h1>
                <ul className="">
                  {state?.data?.coal_products?.map((item: IProduct) => {
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
              <div className="w-3/5 rounded border-2 border-black">
                <h1 className="text-xl font-semibold  py-3 px-2">
                  Дополнительные услуги
                </h1>
                <ul className="">
                  {state?.data?.additional_services?.map((item: IAdditionalService) => {
                    return (
                      <li
                        key={item.id}
                        className="grid grid-cols-2 odd:text-white odd:bg-blue-500 text-xl px-2 py-3"
                      >
                        <p>{item.title}</p>
                        <p>{item.price}₽</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="w-3/5 rounded border-2 border-black">
                <h1 className="text-xl font-semibold py-3 px-2">Способы оплаты</h1>
                <div className="">
                  <ul>
                    {state?.data?.payment_options?.map((item, index) => {
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
            </div>

            <WarahousePageContacts
              contacts={state?.data?.contacts[0]}
              region={state?.data?.region}
              address={state?.data?.address}
              schedule={state?.data?.schedule}
            />
          </div>

          { // @ts-ignore
            <Calculator
              coal_products={state?.data?.coal_products!}
              delivery={state?.data?.delivery!}
            />
          }

        </>
      }

      <WarehousePageFootnotes />
    </StandartLayout>
  );
};

export default WarehousePage;
