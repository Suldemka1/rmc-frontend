import { FC } from "react";
import { ISliders } from "../Sidebar/Banner";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import parser from 'html-react-parser'

const MainSlider: FC<ISliders> = (params: ISliders) => {
  return (
    <div className="index-page-slider w-full sticky left-0 right-0 pb-10">
      <Slider adaptiveHeight>
        {params.slider.map((item, index) => {
          return (
            <div key={index} className="item">
              <img src={process.env.REACT_APP_BASEURL! + item.image?.url} />
              <div className="container mx-auto">
                <div className="text select-none">
                  <div className="name">{item.title}</div>
                  <p>{parser(item.content)}</p>

                  <Link
                    to="/warehouses"
                    className="rounded-md bg-blue-600 outline-0 shadow-none text-white text-xl uppercase py-3 px-4 hover:bg-blue-900"
                  >
                    Перейти
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;
