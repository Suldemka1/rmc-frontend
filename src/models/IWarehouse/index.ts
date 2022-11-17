import { IAddress } from "../IAddress";
import { IRegion } from "../IRegion";

export interface IWarehouse {
  id: number;
  title: string;
  owner: string;
  url: string;
  region: IRegion;
  Address: IAddress;
  contacts: [{
    phone: string;
    email: string;
    webSiteUrl: string;
  }];
  brief: {
    id: number;
    lowest_coal_cost: string;
    devivery_cost: string;
    average_delivery_time: string;
    coal_remainder: string;
  };
}

export interface IWarehouseListItem {
  id: number;
  title: string;
}
