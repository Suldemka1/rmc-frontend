import { FC } from "react";
import { IWarehouse } from "../../models/IWarehouse";
import RegionWarehousesList from "./RegionWarehousesList";
import RegionWarehousesListItem from "./RegionWarehousesList/RegionWarehousesListItem";

interface IRegionWarehoueses {
  id: number;
  title: string;
  warehouses: [IWarehouse];
  warehouses_count: number;
}

const RegionWarehousesContainer: FC<any> = (params: any) => {
  const data = params.data;

  return (
    <div>
      <RegionWarehousesList>
        {data.data.map((item: IRegionWarehoueses) => {
          return (
            <RegionWarehousesListItem
              key={item.id}
              id={item.id}
              title={item.title}
              warehouses_count={item.warehouses.length}
            />
          );
        })}
      </RegionWarehousesList>
    </div>
  );
};

export default RegionWarehousesContainer;
