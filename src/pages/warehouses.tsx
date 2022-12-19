import StandartLayout from "../layouts/StandartLayout";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Map from "../components/Map";
import List from "../components/Warehouses/List";
import Menu from "../components/Warehouses/Menu";
import RegionWarehousesContainer from "../components/RegionWarehouses/RegionWarehousesContainer";
import { fetchAllWarehouses, listWarehouses } from "../store/slices/warehouseSlice";
import React, { FC, useCallback, useEffect } from "react";

interface IChecked {
  map: boolean;
  list: boolean;
}

const Warehouses: FC = () => {
  const state = useAppSelector((state) => state.map);
  const warehouses = useAppSelector((state) => state.warehouses);
  const regions = useAppSelector((state) => state.regions)

  const dispatch = useAppDispatch();

  const data = useCallback(() => dispatch(fetchAllWarehouses()), []);

  useEffect(() => {
    data();
    dispatch(listWarehouses())
    dispatch(fetchAllWarehouses())
    
  }, []);

  return (
    <StandartLayout>
      <Menu />
      {state.map && <Map />}
      {state.list && (<List data={warehouses.warehouses} />)}
      {state.region && (
        <RegionWarehousesContainer data={warehouses.regions} />
      )}
    </StandartLayout>
  );
};

export default React.memo(Warehouses);
