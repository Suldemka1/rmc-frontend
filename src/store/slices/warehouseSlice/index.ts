import {createSlice} from "@reduxjs/toolkit";
import {IWarehouse} from "../../../models/IWarehouse";
import {fetchAllWarehouses} from "./services";

interface IInitialState {
	warehouses: { data: [IWarehouse] | null | undefined} ;
	status: string;
	error: string;
}

const initialState: IInitialState = {
	warehouses: {data: null},
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
		[fetchAllWarehouses.fulfilled]: (state, action: { payload: any }) => {
			state.warehouses.data = action.payload;
		},
		[fetchAllWarehouses.rejected]: (state, action) => {
			state.status = "rejected";
		},
	},
});

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;
