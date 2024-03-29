import { FC } from "react";
import { ISliders } from "../Sidebar/Banner";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import parser from 'html-react-parser'
import Media from "react-media";

const MainSlider: FC<ISliders> = (params: ISliders) => {
  return (
    <Media queries={{
      small: "(max-width: 767px)",
      medium: "(min-width: 768px) and (max-width: 1920px)",
      large: "(min-width: 768px)",
    }}>
      {
        matches => (
          <>
            {
              matches.large && <div className="index-page-slider w-full sticky left-0 right-0 pb-10">
                <Slider adaptiveHeight>
                  {params.slider.map((item, index) => {
                    return (
                      <div key={index} className="item">
                        <img src={process.env.REACT_APP_BASEURL! + item.image?.url} />
                        <div className="container mx-auto">
                          <div className="text select-none">
                            <div className="name">{item.title}</div>
                            <div>{parser(item.content)}</div>

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
            }

          </>

        )
      }
    </Media>

  );
};

export default MainSlider;
