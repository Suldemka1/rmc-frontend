import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRegion } from "../../../models/IRegion";
import { IRegionWarehoueses } from "../../../models/IRegionWarehouses";
import { getAllRegions, getRegionsWarehouses } from "./services";

const initialState: IRegion = {
  id: 0,
  title: "",
  warehouses: [
    {
      id: 0,
      title: "",
      owner: "",
      url: "",
      region: {
        id: 0,
        title: ''
      },
      address: {
        code: "",
        region_type: "",
        region: "",
        street: "",
        house: "",
        note: "",
      },
      contacts: [
        {
          phone: "",
          email: "",
          webSiteUrl: "",
        },
      ],
      brief: {
        id: 0,
        lowest_coal_cost: "",
        devivery_cost: "",
        average_delivery_time: "",
        coal_remainder: "",
      },
      payment_options: [
        {
          option: "",
        },
      ],
    },
  ],
};

const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},

  extraReducers: {
    // [getAllRegions.fulfilled]: (state, action) => {
    //   state = action.payload;
    // },

    [getRegionsWarehouses.pending]: (state: any, action: { payload: any }) => {
      // state = action.payload;
    },
    [getRegionsWarehouses.fulfilled]: (
      state: any,
      action: { payload: any }
    ) => {
      state.data = action.payload;
    },
    [getRegionsWarehouses.rejected]: (state: any, action: { payload: any }) => {
      // state = action.payload;
    },
  },
});

export const {} = regionsSlice.actions;
export default regionsSlice.reducer;
