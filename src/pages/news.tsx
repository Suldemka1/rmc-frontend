import React from 'react';
import StandartLayout from "../layouts/StandartLayout";
import PostCard from "../components/Post/PostCard";
import PageName from "../components/PageName";

const News = () => {
    return (
        <StandartLayout>
            <PageName title="Новости"/>
            <PostCard />
        </StandartLayout>
    );
};

export default News;