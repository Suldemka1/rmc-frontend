import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchAllWarehouses: any = createAsyncThunk(
  "warehouses/fetchAllWarehouses",
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/warehouses?populate=*`
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return await response;
  }
);

const fetchWarehousesByKozhuunName: any = createAsyncThunk(
  "warehouses/fetchWarehousesByKozhuunName",
  async (kozhuun: String) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/warehouses?filters[region][title][$containsi][0]=${kozhuun}&populate=*`
    )
      .then((res) => res.json())
      .then((res) => res.data);
    return await response;
  }
);

export { fetchAllWarehouses, fetchWarehousesByKozhuunName };
