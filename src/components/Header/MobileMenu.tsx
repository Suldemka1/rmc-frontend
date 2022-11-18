import React from "react";
import { Link } from "react-router-dom";
import { ITopMenu } from "./TopMenu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { OpenMenu, CloseMenu } from "../../store/slices/menuSlice";

const MobileMenu = () => {
  const menuState = useAppSelector((state) => state.menu);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <AiOutlineMenu
          onClick={() => dispatch(OpenMenu())}
          className="w-10 h-10"
        />
      </div>
      <div
        className={
          menuState.isOpen
            ? "fixed top-0 bottom-0 right-0 sm:w-2/3 xs:w-1/2 bg-blue-900"
            : "hidden"
        }
      >
        <div
          className="fixed top-0 bottom-0 left-0 sm:w-1/3 xs:w-1/2 bg-black opacity-70"
          onClick={() => dispatch(CloseMenu())}
        ></div>
        <div className="fixed top-3 right-3">
          <AiOutlineClose
            className="w-10 h-10"
            onClick={() => dispatch(CloseMenu())}
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between gap-5 text-lg uppercase py-48 px-5">
          {menuRoutes.map((item: ITopMenu) => {
            return (
              <Link
                key={item.id}
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
  );
};

const menuRoutes = [
  {
    id: 0,
    name: "главная",
    to: "/",
  },
  {
    id: 1,
    name: "новости",
    to: "/news",
  },
  {
    id: 2,
    name: "карта угольных складов",
    to: "/warehouses",
  },
  {
    id: 3,
    name: "контакты",
    to: "/Contacts",
  },
];

export default MobileMenu;
