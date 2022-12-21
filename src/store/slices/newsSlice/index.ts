import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPosts, fetchLastPosts} from "./services";

export interface IInitialState {
	posts: {
		data: any | null | undefined
	},
	last_posts: {
		data: any | null | undefined
	}
}

const initialState: IInitialState = {
	posts: {data: []},
	last_posts: {data: []}
}

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},

	extraReducers: {
		[fetchAllPosts.fulfilled]: (state: any, action: {payload: any}) => {
			state.posts.data = action.payload
		},
		[fetchLastPosts.fulfilled]: (state, action: {payload: any}) => {
			state.last_posts.data = action.payload
		}
	}
})

export const {} = newsSlice.actions;
export default newsSlice.reducer;
