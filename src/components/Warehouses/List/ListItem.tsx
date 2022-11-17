import { MdEmail, MdPhone } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { IAddress } from "../../../models/IAddress";
import { IRegion } from "../../../models/IRegion";
import { IWarehouse } from "../../../models/IWarehouse";

const ListItem = ({
  id,
  title,
  url,
  region,
  Address,
  contacts,
}: IWarehouse) => {
  return (
    <li className="border border-black rounded">
      <div className="flex flex-col">
        <div className="bg-blue-400 font-semibold text-xl text-white p-3">
          <h2>{title}</h2>
        </div>
        <div className="p-3">
          <p>
            {Address?.code}, {region?.title}, {Address?.region}, улица{" "}
            {Address?.street}, дом {Address?.house}
          </p>
        </div>
        <div className="flex flex-row justify-between items-stretch p-3">

          <div className="flex flex-row gap-20">
            <details className="flex flex-col gap-2">
              <summary>Контактные данные склада</summary>
              <div className="flex flex-col gap-3 p-3">
                <div className="flex flex-row items-center gap-2">
                <MdEmail className="w-6 h-6" />
                <p>{contacts[0]?.phone}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdPhone className="w-6 h-6" />
                <p>{contacts[0]?.email}</p>
              </div>
              </div>
              
            </details>

            <div>
              <p>пн-пт 9:00-18:00</p>
            </div>
          </div>

          <div className="button">
            <Link to={url}>Перейти</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
