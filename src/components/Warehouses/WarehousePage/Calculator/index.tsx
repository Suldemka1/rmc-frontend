import React, { useEffect, useState } from "react";
import { IDelivery, IProduct } from "../../../../models/IWarehouse";
import {
  CalcDeliveryDay,
  Calculate,
  CalculateWithoutDelievery,
  Validate,
} from "./functions";

interface ICalculateParams {
  coal_products: [IProduct];
  delivery: [IDelivery];
}

const Calculator = (params: ICalculateParams) => {
  const [coalPrice, setCoalPrice] = useState<number | undefined>(undefined);
  const [destination, setDestination] = useState<string | undefined>(undefined);
  const [selectedDestination, setSelectedDestination] = useState<
    string | undefined
  >(undefined);
  const [deliveryPrice, setDeliveryPrice] = useState<number | undefined>(
    undefined
  );
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [coalRemainder, setCoalRemainder] = useState<number | undefined>(
    undefined
  );
  const [result, setResult] = useState<number | string | undefined>(undefined);

  useEffect(() => {
    setCoalPrice(params.coal_products[0].price);
    setCoalRemainder(params.coal_products[0].remainder);
    setDeliveryPrice(params.delivery[0].price);
    setSelectedDestination(JSON.stringify(params.delivery[0]));
    setDestination(params.delivery[0].destination);
  }, []);

  function handleClick() {
    console.log(quantity);
    console.log(deliveryPrice);
    console.log(coalPrice);
    console.log(coalRemainder);

    if (
      typeof quantity === "number" &&
      typeof deliveryPrice === "number" &&
      typeof coalPrice === "number" &&
      typeof coalRemainder === "number"
    ) {
      setResult(Calculate(coalPrice, quantity, deliveryPrice, coalRemainder));
      console.log(Calculate(coalPrice, quantity, deliveryPrice, coalRemainder));
    }
    console.log(result);
  }

  return (
    <div className="w-4/6 flex flex-col gap-5 bg-gray-800 border border-black rounded p-5 my-5">
      <h1 className="text-2xl text-gray-100">
        Калькулятор рассчета стоимости угля
      </h1>

      <div className="flex flex-col justify-between gap-5">
        <input
          type="number"
          placeholder="Необходимое количество в тоннах"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(Number(e.target.value))
          }
          className="input"
        />
        <select
          className="input"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCoalPrice(Number(e.target.value))
          }
        >
          {params?.coal_products?.map((item: IProduct) => {
            return (
              <option key={item?.id} value={item?.price}>
                {item?.name}
              </option>
            );
          })}
        </select>
        {/* место доставки */}
        <select
          className="input"
          defaultValue={selectedDestination}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedDestination(JSON.parse(e.target.value));
            const price = JSON.parse(e.target.value)?.price;
            console.log(price);
            setDeliveryPrice(price.price);
          }}
        >
          {params?.delivery?.map((item, index) => (
            <option key={index} value={JSON.stringify(item)}>
              {item?.destination}
            </option>
          ))}
        </select>
        <select
          className="input"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {}}
        >
          <option value="Доставка">Доставка</option>
          <option value="Самовывоз">Самовывоз</option>
        </select>

        <div className="flex flex-col gap-3 w-2/5"></div>
        <button className="button" onClick={handleClick}>
          Рассчитать
        </button>
      </div>

      <div className="w-1/2 [&>h1]:text-white [&>h1]:text-xl">
        {result && <h1>{result} при самовывозе`</h1>}
        {result && <h1>{`${result} при доставке по адресу`}</h1>}
        {result && <h1>{CalcDeliveryDay(params.delivery[0].average_time)}</h1>}
      </div>
    </div>
  );
};

export default Calculator;
