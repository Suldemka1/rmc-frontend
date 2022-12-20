import { FC } from "react";
import { IWarehouse } from "../../models/IWarehouse";
import RegionWarehousesList from "./RegionWarehousesList";
import RegionWarehousesListItem from "./RegionWarehousesList/RegionWarehousesListItem";

const RegionWarehousesContainer: FC<any> = (params: any) => {
  const data = params.data.data;
  return (
    <div>
      <RegionWarehousesList>
        {data.map((item: any) => {
          return (
            <RegionWarehousesListItem
              key={item.id}
              id={item.id}
              title={item.title}
              warehouses_count={item?.warehouses?.length}
            />
          );
        })}
      </RegionWarehousesList>
    </div>
  );
};

export default RegionWarehousesContainer;
