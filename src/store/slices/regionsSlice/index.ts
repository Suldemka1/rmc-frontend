import { createSlice } from "@reduxjs/toolkit";
import { fetchAllRegions, fetchRegionByName } from "./services";
import { IRegion } from "../../../models/IRegion";

interface IRegions {
  regions: { data: [IRegion] | undefined };
  status: String;
}

const initialState: IRegions = {
  regions: { data: undefined },
  status: "pending",
};

const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchAllRegions.fulfilled]: (
      state,
      action: { payload: { data: [IRegion]; meta: unknown } }
    ) => {
      state.regions = action.payload;
      state.status = "fulfilled";
      console.log(state);
    },
    [fetchAllRegions.rejected]: (state, action) => {
      state.status = "error";
    },

    [fetchRegionByName.pending]: (state, action) => {
      state.status = "pending";
      console.log(state.status);
    },
    [fetchRegionByName.fulfilled]: (
      state,
      action: { payload: { data: [IRegion]; meta: unknown } }
    ) => {
      state.regions = action.payload;
      state.status = "fulfilled";
    },
  },
});

export const {} = regionsSlice.actions;
export default regionsSlice.reducer;
