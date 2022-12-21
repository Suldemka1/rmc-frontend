import { createSlice } from "@reduxjs/toolkit";
import {fetchAllRegions} from "./services";

const initialState: any = {
  regions: []
};

const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchAllRegions.fulfilled]: (state, action: {payload: any}) => {
      state.regions = action.payload;
    },
    [fetchAllRegions.rejected]: (state, action) =>  {
      state.status = "error"
    }
  },
});

export const {} = regionsSlice.actions;
export default regionsSlice.reducer;
