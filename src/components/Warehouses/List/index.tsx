import { FC } from "react";
import {IWarehouse, IWarehouseListItem} from "../../../models/IWarehouse";
import ListItem from "./ListItem";

const List: FC<any> = (params: any) => {
  return (
    <ul className="flex flex-col gap-5">
      {params.data.data.map((item: any) => {
        const warehouses: JSX.Element[] = [];

        item.warehouses.forEach((items: IWarehouse) => {
          warehouses.push(
            <ListItem
              key={items.id}
              id={items.id}
              title={items.title}
              owner={items.owner}
              url={`/warehouses/${item.id}/${items.id}`}
              region={items.region}
              address={items.address}
              contacts={items?.contacts}
              brief={items.brief}
              payment_options={items.payment_options}
            />
          );
        });

        return warehouses;
      })}
    </ul>
  );
};

export default List;
