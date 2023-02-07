import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ITopMenu } from "./TopMenu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { OpenMenu, CloseMenu } from "../../store/slices/menuSlice";

const MobileMenu = () => {
  const menuState = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    menuState.isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
  }, [menuState])
  return (
    <div>


      <div>
        <AiOutlineMenu
          onClick={() => dispatch(OpenMenu())}
          className="w-10 h-10"
        />
        {/* <div
          className="fixed top-0 bottom-0 left-0 right-0 sm:w-1/3 xs:w-1/2 bg-black opacity-70"
          onClick={() => dispatch(CloseMenu())}
        ></div> */}
        <div
          className={
            menuState.isOpen
              ? "fixed top-0 bottom-0 right-0 sm:w-2/3 xs:w-1/2 bg-blue-900 mobile__menu"
              : "hidden"
          }
        >

          <div className="fixed top-3 right-3">
            <AiOutlineClose
              className="w-10 h-10"
              onClick={() => dispatch(CloseMenu())}
            />
          </div>
          <div className="w-full h-full flex flex-col justify-start gap-5 text-lg uppercase py-24 px-5">
            {menuRoutes.map((item: ITopMenu) => {
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => dispatch(CloseMenu())}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>

  );
};

const menuRoutes = [
  {
    id: 0,
    name: "Главная",
    to: "/",
  },
  {
    id: 1,
    name: "Новости",
    to: "/news",
  },
  {
    id: 2,
    name: "Склады",
    to: "/warehouses",
  },
  {
    id: 3,
    name: "Контакты",
    to: "/Contacts",
  },
];

export default MobileMenu;
