import { createSlice } from "@reduxjs/toolkit";
import { IWarehouse } from "../../../models/IWarehouse";
import { fetchAllWarehouses, fetchWarehousesByKozhuunName } from "./services";

interface IInitialState {
  warehouses: { data: [IWarehouse] | null | undefined };
  status: string;
  error: string;
}

const initialState: IInitialState = {
  warehouses: { data: null },
  status: "pending",
  error: "",
};

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},

  extraReducers: {
    //fetch all warehouses
    [fetchAllWarehouses.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchAllWarehouses.fulfilled]: (state, action: { payload: any }) => {
      state.warehouses.data = action.payload;
      state.status = "fulfilled";
    },
    [fetchAllWarehouses.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [fetchWarehousesByKozhuunName.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchWarehousesByKozhuunName.fulfilled]: (
      state,
      action: { payload: any }
    ) => {
      state.warehouses.data = action.payload;
      state.status = "fulfilled";
    },
    [fetchWarehousesByKozhuunName.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;
