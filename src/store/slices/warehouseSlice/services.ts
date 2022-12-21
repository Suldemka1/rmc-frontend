import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllWarehouses: any = createAsyncThunk(
	"warehouses/fetchAllWarehouses",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/warehouses?populate=*`)
			.then((res) => res.json())
			.then((res) => res.data);
		return await response;
	}
);
