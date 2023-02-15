import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts: any = createAsyncThunk(
  "search/fetchPosts",
  async (query: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/posts?populate[0]=post_card.preview_image&filters[post_card][short_body][$containsi]=${query}&sort[2]=publishedAt%3Adesc`
    )
      .then((res) => res.json())
      .then((res) => res.data)
      .catch((e) => console.error(e));
    return response;
  }
);
