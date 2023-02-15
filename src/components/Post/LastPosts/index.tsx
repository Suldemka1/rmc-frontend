import { Link } from "react-router-dom";
import Media from "react-media";
import PostCard from "../PostCard";
import FormattedDate from "../../FormattedStrings";

const LastPosts = ({ news }: any) => {
  return (
    <div className="py-3">
      <Link
        to="/news"
        className="text-2xl font-semibold tracking-wider cursor-pointer hover:text-blue-900"
      >
        Все новости
      </Link>
      <Media
        queries={{
          small: "(max-width: 767px)",
          medium: "(min-width: 768px) and (max-width: 1920px)",
          large: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <div className="flex flex-col gap-3">
                {news?.last_posts?.data?.map((item: any, index: number) => {
                  return (
                    <PostCard
                      key={item.id}
                      id={item.id}
                      title={item.post_card.title}
                      preview_image={
                        process.env.REACT_APP_BASEURL +
                        item.post_card.preview_image.url
                      }
                      short_body={item.post_card.short_body}
                      publication_date={item.publishedAt}
                    />
                  );
                })}
              </div>
            )}
            {matches.large && (
              <div className="last-news__container">
                {news?.last_posts?.data?.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="last-news__card first:relative first:flex-[0_0_auto] w-1/3 first:w-2/3 h-full md:first:h-[400px] first:pr-2 [&:not(:first-child)]:pr-2 py-3"
                    >
                      <img
                        src={`${process.env.REACT_APP_BASEURL}${item.post_card.preview_image.url}`}
                        className="first:max-w-full first:max-h-[400px] max-w-[300px] max-h-[200px] h-[200px] object-cover"
                      />

                      <div className="last-news__card-content__container">
                        <div className="last-news__card-content">
                          <h3 className="text-lg">
                            <Link
                              className="last-news__card-title"
                              to={`/news/${item.id}`}
                            >
                              {item.post_card.title.length > 60
                                ? String(item.post_card.title).substring(
                                    0,
                                    60
                                  ) + "..."
                                : item.post_card.title}
                            </Link>
                          </h3>

                          <div className="last-news__card-date text-sm">
                            <FormattedDate date={item.publishedAt} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default LastPosts;
