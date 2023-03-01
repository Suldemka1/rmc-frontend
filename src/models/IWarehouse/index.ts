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
  price: number;
  remainder: number;
}

export interface IAdditionalService {
  id: number;
  title: string;
  price: number;
}

export interface IPaymentOption {
  option: string;
}

export interface ISchedule {
  id: number;
  day: string;
  time: string;
}

export interface IDeliveryOption {
  id: number;
  options: string;
}

export interface IDelivery {
  id: number;
  destination: string;
  price: number;
  average_time: number;
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
  schedule: [ISchedule];
  owner: string;
  brief: IBrief;
  payment_options: [IPaymentOption];
  coal_products: [IProduct] | undefined;
  additional_services: [IAdditionalService];
  delivery: [IDelivery] | undefined;
}
