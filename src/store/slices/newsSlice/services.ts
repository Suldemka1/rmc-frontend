import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllPosts: any = createAsyncThunk(
	"news/fetchAllPosts",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/posts?populate[post_card][populate][0]=preview_image&populate=*`)
			.then((res) => res.json())
			.then((res) => res.data)
			.catch((e) => console.error(e))

		return response
	}
)

export const fetchLastPosts: any = createAsyncThunk(
	"news/fetchLastPosts",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/posts?populate[post_card][populate][0]=preview_image&pagination[limit]=5&populate=*`)
			.then((res) => res.json())
			.then((res) => res.data)
			.catch((e) => console.error(e))
		return response
	}
)
