import React, {useEffect} from 'react';
import PageName from "../../components/PageName";
import PostCard from "../../components/Post/PostCard";
import StandartLayout from "../../layouts/StandartLayout";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {fetchAllPosts} from "../../store/slices/newsSlice/services";

const News = () => {
	const news = useAppSelector((state) => state.news)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchAllPosts())
	}, []);

	return (
		<StandartLayout>
			<PageName title="Новости"/>
			<div className="flex flex-col gap-3">
				{
					news.posts.data.map((item: any) =>
						<PostCard
							key={item.id}
							id={item.id}
							title={item.post_card.title}
							preview_image={process.env.REACT_APP_BASEURL + item.post_card.preview_image.url}
							short_body={item.post_card.short_body}
							publication_date={item.publishedAt}
						/>
					)
				}
			</div>
		</StandartLayout>
	);
};

export default News;
