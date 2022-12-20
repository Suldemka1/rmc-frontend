import { IWarehouse } from "../IWarehouse";

export interface IRegion {
  id?: number;
  title?: string;
  warehouses?: [IWarehouse]
}

export interface IRegionWithWarehousesCount {
  id?: number;
  title?: string;
  warehouses?: [IWarehouse];
  warehouses_count?: number;
}
