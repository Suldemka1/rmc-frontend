import React, { useEffect } from "react";
import PageName from "../../components/PageName";
import PostCard from "../../components/Post/PostCard";
import StandartLayout from "../../layouts/StandartLayout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchAllPosts } from "../../store/slices/newsSlice/services";
import { IPostPage } from "../../models/IPost/IPostPage";
import { IPostCard } from "../../models/IPost/IPostCard";
import Sidebar from "../../components/Sidebar";

const News = () => {
  const history = document.referrer;
  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
    // console.log(history)
  }, []);

  return (
    <StandartLayout localeUrl="Главная/Новости">
      <div className="container mx-auto">
        <PageName title="Новости" />
        <div className="flex flex-row gap-5">
          <div className="flex flex-col gap-5 w-4/5">
            {news.posts.data.map((item: IPostCard) => (
              <PostCard
                key={item.post_card.id}
                id={item.post_card.id}
                title={item.post_card.title}
                preview_image={
                  process.env.REACT_APP_BASEURL! +
                  item.post_card.preview_image.url
                }
                short_body={item.post_card.short_body}
                publication_date={item.publishedAt}
              />
            ))}
          </div>
          <div className="w-1/5">{/* <Sidebar banners={}/> */}</div>
        </div>
      </div>
    </StandartLayout>
  );
};

export default News;
