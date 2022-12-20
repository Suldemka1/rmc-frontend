import StandartLayout from "../../../../rmc-frontend/layouts/StandartLayout";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Map from "../components/Map";
import List from "../components/Warehouses/List";
import Menu from "../components/Map/Menu";
import RegionWarehouses from "../components/RegionWarehouses";
import React, { FC, useEffect } from "react";
import {fetchAllWarehouses} from "../../../../rmc-frontend/store/warehouseSlice";
import {fetchAllRegions} from "../../../../rmc-frontend/store/regionsSlice";

interface IChecked {
  map: boolean;
  list: boolean;
}

const Warehouses: FC = () => {
  const state = useAppSelector((state) => state.map);
  const warehouses = useAppSelector((state) => state.warehouses);
  const regions = useAppSelector((state) => state.regions)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllWarehouses())
    dispatch(fetchAllRegions())

  }, []);


  return (
    <StandartLayout>
      <Menu />
      {state.map && <Map />}
      {// @ts-ignore
        state.list && (<List data={warehouses?.warehouses} />)}
      {// @ts-ignore
        state.region && (<RegionWarehouses data={regions.data} />
      )}
    </StandartLayout>
  );
};

export default React.memo(Warehouses);
