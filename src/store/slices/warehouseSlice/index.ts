import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IWarehouse } from "../../../models/IWarehouse";

interface IInitialState {
  regions: [];
  warehouses: [IWarehouse];
  status: string;
  error: string;
}

const initialState: IInitialState = {
  regions: [],
  warehouses: [
    {
      id: 0,
      title: "",
      owner: "",
      url: "",
      brief: {
        id: 0,
        lowest_coal_cost: "",
        devivery_cost: "",
        average_delivery_time: "",
        coal_remainder: "",
      },
      contacts: [
        {
          phone: "",
          email: "",
          webSiteUrl: "",
        },
      ],
      region: {
        id: 0,
        title: "",
      },
      address: {
        code: "",
        region: "",
        street: "",
        house: "",
        note: "",
      },
      payment_options: [
        {
          option: "",
        },
      ],
    },
  ],
  status: "",
  error: "",
};

export const fetchAllWarehouses: any = createAsyncThunk(
  "warehouses/fetchAllWarehouses",
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/regions?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=address&populate=[warehouses][populate][2]=brief&populate[warehouses][populate][3]=region`
    );
    const data = await response.json();
    console.log("get regions");
    console.log(data);
    return await data;
  }
);

export const listWarehouses: any = createAsyncThunk(
  "warehouses/listWarehouses",
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/warehouses?populate=*`
    );
    const data = await response.json();
    console.log("get warehouses");
    console.log(data);
    return await data;
  }
);

// export const fetchWarehouseData: any = createAsyncThunk(
//   "warehouses/fetchWarehouseData",
//   async (id) => {
//     const response = await fetch(
//       `${process.env.REACT_APP_BASEURL}/api/warehouses/${id}?populate=*`
//     );
//     const data = await response.json();
//     console.log("get warehouse data");
//     console.log(data);
//     return await data;
//   }
// );

const warehouseSlice = createSlice({
  name: "warehouses",
  initialState,
  reducers: {},

  extraReducers: {
    //fetch all regions
    [fetchAllWarehouses.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchAllWarehouses.fulfilled]: (state, action) => {
      state.regions = action.payload;
    },
    [fetchAllWarehouses.rejected]: (state, action) => {},

    //fetch all warehouses
    [listWarehouses.pending]: (state, action) => {
      state.status = "pending";
    },
    [listWarehouses.fulfilled]: (state, action) => {
      state.warehouses = action.payload;
    },
    [listWarehouses.rejected]: (state, action) => {
      state.status = "rejected";
    },

    //fetch warehouse data
    // [fetchWarehouseData.pending]: (state, action) => {
    //   state.status = "pending";
    // },
    // [fetchWarehouseData.fulfilled]: (state, action) => {
    //   state.warehouses = action.payload;
    // },
    // [fetchWarehouseData.rejected]: (state, action) => {
    //   state.status = "rejected";
    // },
  },
});

export const {} = warehouseSlice.actions;
export default warehouseSlice.reducer;
