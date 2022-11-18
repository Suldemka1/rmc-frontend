import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IWarehouse } from "../../../models/IWarehouse";

interface IInitialState {
  warehouses: [IWarehouse];
  status: string;
  error: string;
}

const initialState: IInitialState = {
  warehouses: [
    {
      id: 0,
      title: "",
      owner: "",
      url: "",
      brief: {
        id: 0,
        lowest_coal_cost: "",
        devivery_cost: "",
        average_delivery_time: "",
        coal_remainder: "",
      },
      contacts: [
        {
          phone: "",
          email: "",
          webSiteUrl: "",
        },
      ],
      region: {
        id: 0,
        title: "",
      },
      address: {
        code: "",
        region: "",
        street: "",
        house: "",
        note: "",
      },
      payment_options: [
        {
          option: "",
        },
      ],
    },
  ],
  status: "",
  error: "",
};

export const fetchAllWarehouses: any = createAsyncThunk(
  "warehouses/fetchAllWarehouses",
  async () => {
    const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/regions?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate=[warehouses][populate][2]=brief&populate[warehouses][populate][3]=region`);
    const data = await response.json();
    console.log('from thunk')
    console.log(data)
    return data;
  }
);

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchAllWarehouses.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchAllWarehouses.fulfilled]: (state, action) => {
      state.warehouses = action.payload
    },
    [fetchAllWarehouses.rejected]: (state, action) => {},
  },
});

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;
