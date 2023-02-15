import StandartLayout from "../../layouts/StandartLayout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import List from "../../components/Warehouses/List";
import Menu from "../../components/Map/Menu";
import RegionWarehouses from "../../components/Regions";
import React, { FC, useCallback, useEffect } from "react";
import {
  fetchAllWarehouses,
  fetchWarehousesByKozhuunName,
} from "../../store/slices/warehouseSlice/services";
import {
  fetchAllRegions,
  fetchRegionByName,
} from "../../store/slices/regionsSlice/services";
import { IRegion } from "../../models/IRegion";
import { RiLoader5Fill } from "react-icons/ri";

interface IChecked {
  map: boolean;
  list: boolean;
}

const Warehouses: FC = () => {
  const state = useAppSelector((state) => state.map);
  const warehouses = useAppSelector((state) => state.warehouses);
  const regions = useAppSelector((state) => state.regions);
  const dispatch = useAppDispatch();

  const handleSelectOnChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(fetchWarehousesByKozhuunName(e.target.value));
      dispatch(fetchRegionByName(e.target.value));
    },
    []
  );

  useEffect(() => {
    dispatch(fetchAllRegions());
    dispatch(fetchAllWarehouses());
  }, []);

  const renderSelectItems = useCallback(() => {
    return (
      <select
        className="w-[300px] h-[35px] border border-black rounded py-2 px-2"
        onChange={handleSelectOnChange}
      >
        <option value="">Все</option>
        {regions != undefined &&
          regions?.regions?.data?.map((item: IRegion) => {
            return <option value={item.title}>{item.title}</option>;
          })}
      </select>
    );
  }, []);

  function displayRegionCards() {
    if (state.region) {
      if (regions.status != "pending" && regions.status != "rejected") {
        return <RegionWarehouses regions={regions?.regions?.data} />;
      } else {
        return <RiLoader5Fill className="animate-spin h-5 w-5" />;
      }
    } else {
      return null;
    }
  }

  function displayWarehousesCards() {
    if (state.list) {
      if (warehouses.status != "pending" && warehouses.status != "rejected") {
        return <List warehouses={warehouses?.warehouses?.data} />;
      } else {
        return <RiLoader5Fill className="animate-spin h-5 w-5" />;
      }
    } else {
      return null;
    }
  }

  return (
    <StandartLayout localeUrl="Главная/Склады">
      <div className="container mx-auto flex sm:flex-col md:flex-row sm:items-start md:items-center sm:justify-between pb-3">
        <Menu />
        {renderSelectItems()}
      </div>
      <div className="container mx-auto">
        {displayWarehousesCards()}
        {displayRegionCards()}
      </div>
    </StandartLayout>
  );
};

export default React.memo(Warehouses);
