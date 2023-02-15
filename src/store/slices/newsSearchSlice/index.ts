import { createSlice } from "@reduxjs/toolkit";
import { IPostCard } from "../../../models/IPost/IPostCard";
import { fetchPosts } from "./services";

export interface ISearchInitialState {
  query: string;
  posts: {
    data: any | undefined;
  };
}

const initialState: ISearchInitialState = {
  query: "",
  posts: {
    data: undefined,
  },
};

const newsSearchSlice = createSlice({
  name: "newsSearchSlice",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state: any, action: { payload: any }) => {
      state.posts.data = action.payload;
      console.log(state);
    },
  },
});

export const { setQuery } = newsSearchSlice.actions;
export default newsSearchSlice.reducer;
