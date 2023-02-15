import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, fetchLastPosts } from "./services";

interface INewsInitialState {
  posts: {
    data: any | null | undefined;
  };
  last_posts: {
    data: any | null | undefined;
  };
}

const initialState: INewsInitialState = {
  posts: { data: [] },
  last_posts: { data: [] },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchAllPosts.fulfilled]: (state: any, action: { payload: any }) => {
      state.posts.data = action.payload;
    },
    [fetchLastPosts.fulfilled]: (state, action: { payload: any }) => {
      state.last_posts.data = action.payload;
    },
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
