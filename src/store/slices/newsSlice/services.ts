import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllPosts = createAsyncThunk(
	"news/fetchAllPosts",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/posts?populate=*`)
			.then((res) => res.json())
			.catch((e) => console.error(e))

		return response
	}
)
