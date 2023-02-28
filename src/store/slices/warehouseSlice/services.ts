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

const fetchWarehouse: any = createAsyncThunk(
  "singleWarehouse/fetchWarehouse",
  async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/warehouses/${id}?populate[0]=delivery&populate[1]=brief&populate[2]=contacts&populate[3]=region&populate[4]=payment_options&populate[5]=address&populate[6]=schedule&populate[7]=coal_products`
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

export { fetchAllWarehouses, fetchWarehousesByKozhuunName, fetchWarehouse };
