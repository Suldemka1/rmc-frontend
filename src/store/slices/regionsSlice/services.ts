import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllRegions: any = createAsyncThunk(
	"regions/fetchAllRegions",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/regions?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate=[warehouses][populate][2]=brief&populate[warehouses][populate][3]=region`)
			.then(res => res.json())
		return response;
	}
);
