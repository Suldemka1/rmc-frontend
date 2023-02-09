import StandartLayout from "../layouts/StandartLayout";
import Map from "../components/Map";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchLastPosts } from "../store/slices/newsSlice/services";
import FormattedDate from "../components/FormattedStrings";
import { fetchAllWarehouses } from "../store/slices/warehouseSlice/services";
import { fetchAllRegions } from "../store/slices/regionsSlice/services";
import Media from "react-media";
import PostCard from "../components/Post/PostCard";
import Slider from "../components/Slider/index";
import Sidebar from "../components/Sidebar";



const Mainpage = () => {
    const news = useAppSelector((state) => state.news)
    const dispatch = useAppDispatch()

    const setup = useCallback(() => {
        dispatch(fetchLastPosts())
        dispatch(fetchAllWarehouses())
        dispatch(fetchAllRegions())
    }, [])

    useEffect(() => {
        setup()
    }, [])

    return (
        <StandartLayout localeUrl="Главная">
            <Slider />
            <div className="flex flex-row gap-5">
                <div className="sm:w-full xs:w-full md:w-full lg:w-4/5 flex flex-col gap-5 py-3">
                    <div id="map">
                        <Map />
                    </div>

                    <div>
                        <div className="py-3">
                            <Link to="/news" className="text-2xl font-semibold tracking-wider cursor-pointer hover:text-blue-900">Все новости</Link>

                        </div>
                        <Media queries={{
                            small: "(max-width: 767px)",
                            medium: "(min-width: 768px) and (max-width: 1920px)",
                            large: "(min-width: 768px)"
                        }}>
                            {matches => (
                                <>
                                    {matches.small && <div className="flex flex-col gap-3">
                                        {
                                            news?.last_posts?.data?.map((item: any, index: number) => {
                                                return <PostCard
                                                    key={item.id}
                                                    id={item.id}
                                                    title={item.post_card.title}
                                                    preview_image={process.env.REACT_APP_BASEURL + item.post_card.preview_image.url}
                                                    short_body={item.post_card.short_body}
                                                    publication_date={item.publishedAt}
                                                />
                                            })
                                        }
                                    </div>}
                                    {
                                        matches.large && <div className="last-news__container">
                                            {
                                                news?.last_posts?.data?.map((item: any, index: number) => {
                                                    return (
                                                        <div key={index}
                                                            className="last-news__card first:relative first:flex-[0_0_auto] w-1/3 first:w-2/3 h-full md:first:h-[400px] first:pr-2 [&:not(:first-child)]:pr-2 py-3">

                                                            <img src={`${process.env.REACT_APP_BASEURL}${item.post_card.preview_image.url}`}
                                                                className="first:max-w-full first:max-h-[400px] max-w-[300px] max-h-[200px] h-[200px] object-cover"
                                                            />

                                                            <div className="last-news__card-content__container">
                                                                <div className="last-news__card-content">
                                                                    <h3 className="text-lg">
                                                                        <Link className="last-news__card-title" to={`/news/${item.id}`}>
                                                                            {
                                                                                item.post_card.title.length > 60
                                                                                    ?
                                                                                    String(item.post_card.title).substring(0, 60) + "..."
                                                                                    :
                                                                                    item.post_card.title
                                                                            }
                                                                        </Link>
                                                                    </h3>

                                                                    <div className="last-news__card-date text-sm">
                                                                        <FormattedDate date={item.publishedAt} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                })
                                            }
                                        </div>
                                    }
                                </>
                            )}
                        </Media>
                    </div>

                </div>
                <div className="sm:hidden md:hidden lg:block sm:w-0 xs:w-0 md:w-0 lg:w-1/5 sm:p-0 py-3 pl-3">
                    <Sidebar />
                </div>
            </div>


        </StandartLayout>
    );
};

export default Mainpage;
