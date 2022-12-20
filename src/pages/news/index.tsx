import React from 'react';
import PageName from "../../components/PageName";
import PostCard from "../../components/Post/PostCard";
import StandartLayout from "../../layouts/StandartLayout";

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
