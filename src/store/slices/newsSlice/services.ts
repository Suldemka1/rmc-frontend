import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllPosts: any = createAsyncThunk(
	"news/fetchAllPosts",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/posts?populate[0]=post_card.preview_image&populate[1]=post_card.images&sort[2]=publishedAt%3Adesc`)
			.then((res) => res.json())
			.then((res) => res.data)
			.catch((e) => console.error(e))

		return response
	}
)

export const fetchLastPosts: any = createAsyncThunk(
	"news/fetchLastPosts",
	async () => {
		const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/posts?populate[0]=post_card.preview_image&pagination[limit]=5&sort[2]=publishedAt%3Adesc`)
			.then((res) => res.json())
			.then((res) => res.data)
			.catch((e) => console.error(e))
		return response
	}
)
