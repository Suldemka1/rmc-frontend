import { createSlice} from "@reduxjs/toolkit";
import {IWarehouse} from "../../../models/IWarehouse";
import { fetchAllWarehouses} from "./services";

interface IInitialState {
	warehouses?: [IWarehouse] | null;
	status: string;
	error: string;
}

const initialState: IInitialState = {
	warehouses: null,
	status: "",
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
		[fetchAllWarehouses.fulfilled]: (state, action: {payload: any}) => {
			state.warehouses = action.payload;
		},
		[fetchAllWarehouses.rejected]: (state, action) => {
			state.status = "rejected";
		},
	},
});

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;
