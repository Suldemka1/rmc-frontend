import { FC } from "react";
import { IChildren } from "../../../models/IChildren"
import RegionWarehousesListItem from "./RegionWarehousesListItem";

const RegionWarehousesList : FC<IChildren> = ({children} : IChildren) => {
  return (
    <div className="flex flex-col gap-4">
      {children}
    </div>
  );
};

export default RegionWarehousesList;
