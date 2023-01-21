import { IAddress } from "../IAddress";
import { IRegion } from "../IRegion";
import { IContact } from "../IContacts";

export interface IBrief {
  lowest_coal_cost: number;
  devivery_cost: number;
  average_delivery_time: number;
  coal_remainder: number;
}

export interface IProduct {
  id: number;
  name: String;
  coal_price: number;
  coal_remainder: number;
}

export interface IPaymentOption {
  option: string;
}

export interface ISchedule {
  id?: number;
  day?: string | null | undefined;
  time?: string | null | undefined;
}

export interface IWarehouseCard {
  id: number;
  title: string;
  url: string;
  contacts: [IContact];
  region: IRegion;
  address: IAddress;
}

export interface IWarehouse extends IWarehouseCard {
  schedule: [ISchedule] | undefined | null;
  owner: string;
  brief: IBrief;
  payment_options: [IPaymentOption];
  coal_products: [IProduct];
}

export interface IWarehousePageItem {
  brief: IBrief;
}

export interface IWarehouseListItem extends IWarehouseCard {
}
