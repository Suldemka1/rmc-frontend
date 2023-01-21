import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllRegions: any = createAsyncThunk(
  "regions/fetchAllRegions",
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/regions?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate=[warehouses][populate][2]=brief&populate[warehouses][populate][3]=region`
    ).then((res) => res.json());
    return response;
  }
);

const fetchRegionByName: any = createAsyncThunk(
  "regions/fetchRegionByName",
  async (name: String) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/regions?filters[title][$containsi]=${name}`
    ).then((res) => res.json());
    return response;
  }
);

export { fetchAllRegions, fetchRegionByName };
