import {BsClock} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";

const WarehouseContactItem = () => {
    return (
        <div className="grid grid-cols-2 text-lg py-3">

            <div className="font-bold ">
                <h3>Название склада</h3>
                <div className="flex gap-2 items-center">
                    <HiLocationMarker fill="red"/>
                    <p>Адрес склада</p>
                </div>
            </div>

            <div className="">
                <h4>+7 (900) 375 2405</h4>
                <div className="flex gap-2 items-center">
                    <BsClock className=""/>
                    <p className="">09:00 - 18:00</p>
                </div>
            </div>
        </div>
    );
};

export default WarehouseContactItem;