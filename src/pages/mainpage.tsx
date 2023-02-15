import StandartLayout from "../layouts/StandartLayout";
import Map from "../components/Map";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchLastPosts } from "../store/slices/newsSlice/services";
import { fetchAllWarehouses } from "../store/slices/warehouseSlice/services";
import { fetchAllRegions } from "../store/slices/regionsSlice/services";
import Slider from "../components/Slider/index";
import Sidebar from "../components/Sidebar";
import LastPosts from "../components/Post/LastPosts";
import {
  IBanner,
  IBanners,
  ISlider,
  ISliders,
} from "../components/Sidebar/Banner";
import MainSlider from "../components/Slider/index";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IMainpage {
  pinned_links: [IBanner];
  slider: [ISlider];
}

const Mainpage = () => {
  const [state, setState] = useState<IMainpage>({
    pinned_links: [
      {
        id: 0,
        title: "",
        url: "",
        image: null,
      },
    ],

    slider: [
      {
        id: 0,
        title: "",
        content: "",
        columns: "",
        image: null,
      },
    ],
  });

  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  const setup = useCallback(() => {
    dispatch(fetchLastPosts());
    dispatch(fetchAllWarehouses());
    dispatch(fetchAllRegions());
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASEURL}/api/main-page?populate[0]=pinned_links.image&populate[1]=slider.image`
    )
      .then((res) => res.json())
      .then((res) => res.data)
      .then((res) => setState(res));
    setup();
  }, []);

  return (
    <>
      <Header />
      <MainSlider slider={state.slider} />
      <div className="container mx-auto">
        <div className="flex flex-row gap-5">
          <div className="sm:w-full xs:w-full md:w-full lg:w-3/4 flex flex-col gap-5">
            <Map />
            <LastPosts news={news} />
          </div>
          <div className="sm:hidden md:hidden lg:block sm:w-0 xs:w-0 md:w-0 lg:w-1/4 sm:p-0 py-3 pl-3">
            <Sidebar pinned_links={state.pinned_links} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
