export interface IPostCard {
	id: number
	title: string
	date: string
}

export interface IPostPage extends IPostCard {
	short_description: string
}
