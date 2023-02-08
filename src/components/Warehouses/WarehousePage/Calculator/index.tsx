import React, { useState } from 'react';
import { IProduct } from '../../../../models/IWarehouse';
import { CalcDelieveryDay, Calculate, CalculateWithoutDelievery, Validate } from './functions';

interface ICalculateParams {
    coal_price: number,
    quantity: number | undefined,
    coal_remainder: number,
    coal_products: [IProduct],
    delievery_price: number,
    average_delievery_time: number,
}

const Calculator = (params: ICalculateParams) => {
    const [coalPrice, setCoalPrice] = useState<number| undefined>(params.coal_price)
    const [quantity, setQuantity] = useState<number | undefined>(0)
    const [coalRemainder, setCoalRemainder] = useState<number>(params.coal_products[0].coal_remainder)
    const [result, setResult] = useState<number | string | undefined>(undefined)
    const [resultWithoutDelievery, setResultWithoutDelievery] = useState<number | string | undefined>(undefined)

    function handleClick() {
        if (quantity) {
            setResult(Calculate(coalPrice!, quantity, params.delievery_price, 100));
            setResultWithoutDelievery(CalculateWithoutDelievery(coalPrice!, quantity, coalRemainder));
        }
        else {
            setQuantity(undefined)
        }
    }

    return (
        <div className="w-4/6 flex flex-col gap-5 bg-gray-800 border border-black rounded p-5 my-5">
            <h1 className="text-2xl text-gray-100">
                Калькулятор рассчета стоимости угля
            </h1>

            <div className="flex flex-row justify-between gap-5">
                <div className="flex flex-col gap-1 w-1/2">
                    <input
                        type="number"
                        placeholder="Необходимое количество в тоннах"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.target.value))}
                        className="input"
                    />
                </div>
                <div>
                    {/* <h2 className='text-2xl text-gray-100 py-5'>Выберите тип угля</h2> */}
                    <select
                        className='input'
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCoalPrice(Number(e.target.value))}
                    >
                        {params?.coal_products?.map((item: IProduct) => {
                            return (
                                <option key={item.id} value={item.coal_price}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <button
                    className="button"
                    onClick={handleClick}
                >
                    Рассчитать
                </button>
            </div>


            <div className="w-1/2 [&>h1]:text-white [&>h1]:text-xl">
                {result && <h1>{Validate(resultWithoutDelievery, quantity, coalRemainder) ? `${resultWithoutDelievery} при самовывозе` : null} </h1>}
                {resultWithoutDelievery && <h1>{Validate(result, quantity, coalRemainder) ? `${result} при доставке по адресу` : null}</h1>}
                {result && <h1>{CalcDelieveryDay(params.average_delievery_time)}</h1>}
            </div>
        </div>
    );
};

export default Calculator;