import {createSlice} from "@reduxjs/toolkit";
import {fetchAllPosts} from "./services";

export interface IInitialState {
	posts: {
		data: any
	}
}

const initialState: IInitialState = {
	posts: {data: []}
}

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},

	// extraReducers: {
	// 	[fetchAllPosts.fulfilled]: (state, action: {payload: any}) => {
	// 		state.posts.data = action.payload
	// 	}
	// }
})

export const {} = newsSlice.actions;
export default newsSlice.reducer;
