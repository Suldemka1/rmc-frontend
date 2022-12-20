import {IAddress} from "../IAddress";
import {IRegion} from "../IRegion";
import {IContact} from "../IContacts";

export interface IBrief {
	lowest_coal_cost: string;
	devivery_cost: string;
	average_delivery_time: string;
	coal_remainder: string;
}

export interface IPaymentOption {
	option: string
}

export interface ISchedule {
	id: number;
	day: string;
	time: string;
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
	schedule: [ISchedule] | null | undefined;
	owner: string;
	brief: IBrief;
	payment_options: [IPaymentOption];
}

export interface IWarehousePageItem {
	brief: IBrief;
}

export interface IWarehouseListItem extends IWarehouseCard {
	id: number
	title: string
}
