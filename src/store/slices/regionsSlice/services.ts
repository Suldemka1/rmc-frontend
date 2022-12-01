import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRegions: any = createAsyncThunk(
  "regions/getAllRegions",
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/regions?populate=*`
    );
    const data = await response.json();

    return data;
  }
);

export const getRegionsWarehouses: any = createAsyncThunk(
  "regions/getRegionsWarehouses",
  async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/regions/${id}?populate=*`
    );
    const data = await response.json();
    return data;
  }
);