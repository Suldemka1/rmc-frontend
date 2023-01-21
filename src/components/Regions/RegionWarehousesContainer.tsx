import { FC } from "react";
import RegionWarehousesListItem from "./RegionWarehousesListItem";

const RegionWarehousesContainer: FC<any> = (params: any) => {
  return (
    <div className="flex flex-col gap-4">
      {params.data.data.map((item: any) => {
        return (
          <RegionWarehousesListItem
            key={item.id}
            id={item.id}
            title={item.title}
            warehouses_count={item?.warehouses?.length}
          />
        );
      })}
    </div>
  );
};

export default RegionWarehousesContainer;
