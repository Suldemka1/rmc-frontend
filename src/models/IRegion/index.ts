import { IWarehouse } from "../IWarehouse";

export interface IRegion {
  id: number;
  title: string;
  warehouses?: [IWarehouse]
}
