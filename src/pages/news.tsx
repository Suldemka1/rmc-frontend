import React from "react";
import StandartLayout from "../layouts/StandartLayout";
import PostCard from "../components/Post/PostCard";
import PageName from "../components/PageName";

const News = () => {
  return (
    <StandartLayout>
      <PageName title="Новости" />
      <div className="flex flex-col gap-3">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </StandartLayout>
  );
};

export default News;
