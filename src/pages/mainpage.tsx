import React from "react";
import StandartLayout from "../layouts/StandartLayout";
import Map from "../components/Map";
import PostCard from "../components/Post/PostCard";
import Resources from "../components/Resources";
import ResourcesItem from "../components/Resources/ResourcesItem";

const Mainpage = () => {
  return (
    <StandartLayout>
      <Map />
      <div className="flex gap-5 py-2">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <Resources>
        {[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17].map((item, index) => {
          return (
            <ResourcesItem />
          )
        })}
      </Resources>
    </StandartLayout>
  );
};

export default Mainpage;
