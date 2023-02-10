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
            <div className="image">
              {/* <img src='/tuva1.svg' /> */}
            </div>
            <div className="wrap">
              <div className="text select-none">
                <div className="name">
                  Уважаемые гости
                </div>
                <p>Центр управления регионом Республики Тыва сообщает, что одной из главных общественно-значимых тем на территории республики
                  остается тема доступности каменного угля. Безусловно, это связано с началом
                  отопительного сезона, однако основные причины возросшей обращаемости -
                  рост цены на уголь, а также отсутствие доступной и актуальной информации в
                  открытых источниках о пунктах реализации (топливных складах), наличии в них
                  угля и объемах, фактических ценах, стоимости доставки, дополнительных услугах.</p>

                <Link to="/warehouses" className="rounded-md bg-blue-600 outline-0 shadow-none text-white text-xl uppercase py-3 px-4 hover:bg-blue-900">Перейти</Link>
              </div>
            </div>
          </div>
        )
      })}
      {/* <div className="item" style={{ backgroundImage: `url('/gosuslugi.svg')` }} >
         <Map />
      </div> */}
    </div>
  );
};

export default Slider;