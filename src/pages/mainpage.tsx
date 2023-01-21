import StandartLayout from "../layouts/StandartLayout";
import Map from "../components/Map";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchLastPosts } from "../store/slices/newsSlice/services";
import FormattedDate from "../components/FormattedStrings";
import { fetchAllWarehouses } from "../store/slices/warehouseSlice/services";
import { fetchAllRegions } from "../store/slices/regionsSlice/services";


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
            <Map />
            <div className="last-news__container">
                {news?.last_posts?.data?.map((item: any, index: any) => {

                    return (
                        <div key={index}
                            className="last-news__card first:relative first:flex-[0_0_auto] w-1/3 first:w-2/3 h-full md:first:h-[400px] px-2 mt-5">

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
                })}
            </div>
        </StandartLayout>
    );
};

export default Mainpage;
