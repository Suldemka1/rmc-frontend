import { IWarehouse } from "../IWarehouse";

export interface IRegionWarehoueses {
  id: number;
  title: string;
  warehouses: [IWarehouse];
  warehouses_count: number;
}