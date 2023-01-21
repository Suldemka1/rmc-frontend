import React from 'react';

const BriefDescription = ({brief}: any) => {
    return (
        <div className="flex flex-col justify-between text-lg">
            <h1 className="text-2xl">Краткая характеристка склада</h1>
            <div>Стоимость угля от {brief?.lowest_coal_cost} руб/тонна</div>
            <div>Доставка от {brief?.devivery_cost} руб/тонна</div>
            <div>Средний срок доставки {brief?.average_delivery_time} дня с момента заказа</div>
            <div>Остаток угля в тоннах: {brief?.coal_remainder}</div>
        </div>
    );
};

export default BriefDescription;