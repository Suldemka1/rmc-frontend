import React, { FC, useEffect, useState } from "react";
import { IDelivery, IProduct } from "../../../../models/IWarehouse";
import {
    CalcDeliveryDay,
    Calculate,
} from "./functions";

interface ICalculateParams {
    coal_products: [IProduct];
    delivery: [IDelivery];
}

const Calculator: FC<ICalculateParams> = ({coal_products, delivery}) => {
    const [coalPrice, setCoalPrice] = useState<number | undefined>(undefined);
    const [destination, setDestination] = useState<string | undefined>(undefined);
    const [selectedDestination, setSelectedDestination] = useState<string | undefined>(undefined);
    const [deliveryPrice, setDeliveryPrice] = useState<number | undefined>(Number(delivery[0].price));
    const [quantity, setQuantity] = useState<number | undefined>(undefined);
    const [coalRemainder, setCoalRemainder] = useState<number | undefined>(undefined);
    const [isDelivery, setIsDelivery] = useState<boolean>(false)
    const [result, setResult] = useState<number | string | undefined>(undefined);

    useEffect(() => {
        setDeliveryPrice(Number(delivery[0].price));
        setCoalPrice(coal_products[0].price);
        setCoalRemainder(coal_products[0].remainder);
        setSelectedDestination(JSON.stringify(delivery[0]));
        setDestination(delivery[0].destination);
    }, []);

    useEffect(() => {
        console.log(`количество ` + typeof quantity)
        console.log(`цена доставки ` + typeof deliveryPrice)
        console.log(`цена угля ` + typeof coalPrice)
        console.log(`остаток угля ` + typeof coalRemainder)
        console.log(`способ доставки` + isDelivery)
    }, [deliveryPrice])

    function handleChange() {

    }

    function handleClick() {
        if (
            typeof quantity === "number" &&
            typeof deliveryPrice === "number" &&
            typeof coalPrice === "number" &&
            typeof coalRemainder === "number"
        ) {
            setResult(Calculate(coalPrice, quantity, deliveryPrice, coalRemainder, isDelivery));
        }
        else {
            console.log('not working')
        }
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
                    {coal_products?.map((item: IProduct) => {
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
                    onChange={async (e: React.ChangeEvent<HTMLSelectElement>) => {
                        // setSelectedDestination(JSON.parse(e.target.value));
                        const data = await JSON.parse(e.target.value);
                        const price = await data
                        await setDeliveryPrice(Number(price));
                        await console.log(deliveryPrice)
                    }}
                >
                    {delivery?.map((item, index) => (
                        <option key={index} value={JSON.stringify(item.price)}>
                            {item?.destination}
                        </option>
                    ))}
                </select>
                <select
                    className="input"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        if (e.target.value == "Доставка") setIsDelivery(true)
                        else setIsDelivery(false)
                    }}
                    defaultValue="Самовывоз"
                >
                    <option value="Доставка">Доставка</option>
                    <option value="Самовывоз">Самовывоз</option>
                </select>

                <div className="flex flex-col gap-3 w-2/5"></div>
                <button className="button" onClick={() => handleClick()}>
                    Рассчитать
                </button>
            </div>

            <div className="w-1/2 [&>h1]:text-white [&>h1]:text-xl">
                {result && <h1>{result} при самовывозе`</h1>}
                {result && <h1>{result} при доставке по адресу</h1>}
                {result && <h1>{CalcDeliveryDay(delivery[0].average_time)}</h1>}
            </div>
        </div>
    );
};

export default Calculator;
