import { FC } from "react";
import Map from "../Map";
import Banner from "../Sidebar/Banner";
import { Link } from "react-router-dom";

const Slider: FC = () => {
  return (
    <div className="index-page-slider">
      {[1].map((item, index) => {
        return (
          <div key={index} className="item"  >
            <div className="image" style={{ backgroundImage: `url('/rmc.jpg')`, objectFit: "cover", backgroundRepeat: "no-repeat" }}>
              {/* <img src='/tuva1.svg' /> */}
            </div>
            <div className="wrap min-h-[700px]">
              <div className="text">
                <div className="name">
                  Уважаемые посетители сайта
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/warehouses">Перейти</Link>
              </div>
            </div>
          </div>
        )
      })}
      <div className="item" style={{ backgroundImage: `url('/gosuslugi.svg')` }} >
        <Map />
      </div>
    </div>
  );
};

export default Slider;