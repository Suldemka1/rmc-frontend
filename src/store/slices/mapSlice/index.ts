import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  map: false,
  list: true,
  region: false,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMap: (state) => {
      state.map = true;
      state.list = false;
      state.region = false;
    },
    setList: (state) => {
      state.map = false;
      state.list = true;
      state.region = false;
    },
    setRegion: (state) => {
      state.map = false;
      state.list = false;
      state.region = true;
    },
  },
});

export const { setMap, setList, setRegion } = mapSlice.actions;
export default mapSlice.reducer;
