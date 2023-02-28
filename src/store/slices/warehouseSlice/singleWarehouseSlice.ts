import { createSlice } from "@reduxjs/toolkit";
import { fetchWarehouse } from "./services";
import { IWarehouse } from "../../../models/IWarehouse";

interface IInitialState {
  data: IWarehouse | undefined;
  status: string;
}

const initialState: IInitialState = {
  data: {
    id: 0,
    title: "загрузка",
    owner: "загрузка",
    url: "загрузка",
    brief: {
      lowest_coal_cost: 0,
      devivery_cost: 0,
      average_delivery_time: 0,
      coal_remainder: 0,
    },
    contacts: [
      {
        id: 0,
        phone: "загрузка",
        email: "загрузка",
        webSiteUrl: "загрузка",
      },
    ],
    region: {
      id: 0,
      title: "загрузка",
    },
    address: {
      code: "загрузка",
      region: "загрузка",
      street: "загрузка",
      house: "загрузка",
      note: "загрузка",
    },
    schedule: [
      {
        id: 0,
        day: "загрузка",
        time: "загрузка",
      },
    ],
    payment_options: [
      {
        option: "загрузка",
      },
    ],
    coal_products: [
      {
        id: 0,
        name: "загрузка",
        price: 2774,
        remainder: 100,
      },
    ],
    additional_services: [
      {
        id: 0,
        title: "",
        price: 50,
      },
    ],
    delivery: [
      {
        id: 0,
        destination: "",
        price: 0,
        average_time: 0,
      },
    ],
  },
  status: "pending",
};

const singleWarehouseSlice = createSlice({
  name: "singleWarehouse",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWarehouse.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchWarehouse.fulfilled]: (state, action: { payload: any }) => {
      state.data = action.payload;
      state.status = "fulfilled";
    },
    [fetchWarehouse.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const {} = singleWarehouseSlice.actions;
export default singleWarehouseSlice.reducer;
