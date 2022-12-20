import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllWarehouses: any = createAsyncThunk(
	"warehouses/fetchAllWarehouses",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/warehouses?populate=*`)
			.then((res) => res.json());
		console.log("get warehouses");
		console.log(response);
		return await response;
	}
);
