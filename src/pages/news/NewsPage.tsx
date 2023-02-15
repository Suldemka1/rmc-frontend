import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageName from "../../components/PageName";
import StandartLayout from "../../layouts/StandartLayout";
import parser from "html-react-parser";
import { IPostPage } from "../../models/IPost/IPostPage";

const NewsPage: FC = () => {
  const params = useParams();
  const [state, setState] = useState<IPostPage>();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/api/posts/${params.id}?populate[0]=post_card.images&populate[1]=post_card.preview_image`
    )
      .then((res) => res.json())
      .then((res) => setState(res.data));
  }, []);

  return (
    <StandartLayout localeUrl={`Главная/Новости/${params.id}`}>
      <div className="container mx-auto">
        {state != null && state != undefined && (
        <>
          <PageName title={state.post_card.title} />
          <div className="flex">
            <img
              src={
                process.env.REACT_APP_BASEURL! + state.post_card.images[0].url
              }
              className="w-[400px] h-[300px] object-cover pr-2 pb-2"
            />
            <div>{parser(state.post_card.body)}</div>
          </div>
        </>
      )}
      </div>
      
    </StandartLayout>
  );
};

export default NewsPage;
