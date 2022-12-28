import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageName from "../../components/PageName";
import StandartLayout from "../../layouts/StandartLayout";
import parser from "html-react-parser";

const NewsPage = () => {
  const params = useParams();
  const [state, setState] = useState({
    post_card: {
      title: "",
      body: "",
      images: [
        {
          url: "",
        },
      ],
    },
  });

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/api/posts/${params.id}?populate[post_card][populate][0]=images&populate=*`
    )
      .then((res) => res.json())
      .then((res) => setState(res.data));
  }, []);

  return (
    <StandartLayout>
      <PageName title={state.post_card.title} />
      <div className="flex">
        <img
          src={process.env.REACT_APP_BASEURL + state.post_card.images[0].url}
					className="w-[400px] h-[300px] object-cover pr-2 pb-2"
        />
        <div>{parser(state.post_card.body)}</div>
      </div>
    </StandartLayout>
  );
};

export default NewsPage;
