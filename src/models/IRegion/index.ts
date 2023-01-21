import { IWarehouse } from "../IWarehouse";

export interface IRegion {
  id?: number;
  title?: string;
  warehouses?: [IWarehouse];
}

export interface IRegionWithWarehousesCount extends IRegion {
  warehouses_count?: number;
}
