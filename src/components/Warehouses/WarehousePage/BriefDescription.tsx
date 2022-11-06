import React from 'react';

const BriefDescription = () => {
    return (
        <div className="flex flex-col justify-between text-lg">
            <h1 className="text-2xl">Краткая характеристка склада</h1>
            <div>Стоимость угля от 1999 руб/тонна</div>
            <div>Доставка от 299 руб/тонна</div>
            <div>Средний срок доставки 2 дня с момента заказа</div>
            <div>Остаток угля в тоннах: 200</div>
        </div>
    );
};

export default BriefDescription;