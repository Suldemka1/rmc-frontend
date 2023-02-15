import { MutableRefObject, useEffect, useRef } from "react";
import PostCard from "../components/Post/PostCard";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import StandartLayout from "../layouts/StandartLayout";
import { fetchPosts } from "../store/slices/newsSearchSlice/services";

const Search = () => {
  const posts = useAppSelector((state) => state.newsSearch);
  const dispatch = useAppDispatch()
  const input = useRef() as MutableRefObject<HTMLInputElement>

  useEffect(() => {
    // dispatch(fetchAllPosts())
  }, [])

  return <StandartLayout localeUrl="Главная/Поиск">
    <div className="flex flex-row items-center gap-3">
      <input
        ref={input}
        type="text"
        placeholder="Поиск по новостям"
        maxLength={50}
        className=" w-1/3 h-full
                  text-black 
                    border-2 border-black rounded 
                    px-2 py-2"
      />
      <button
        className="button"
        onClick={() => dispatch(fetchPosts(input.current.value))}
      >
        Поиск
      </button>
    </div>
    <div className="flex flex-col gap-5 py-5">
      {
        posts?.posts?.data?.map((item: any) => <PostCard
          key={item.id}
          id={item.id}
          title={item.post_card.title}
          preview_image={process.env.REACT_APP_BASEURL + item.post_card.preview_image.url}
          short_body={item.post_card.short_body}
          publication_date={item.publishedAt}
        />)
      }
    </div>

  </StandartLayout>;
};

export default Search;
