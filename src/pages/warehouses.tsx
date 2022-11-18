import StandartLayout from "../layouts/StandartLayout";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Map from "../components/Map";
import List from "../components/Warehouses/List";
import Menu from "../components/Warehouses/Menu";
import RegionWarehousesContainer from "../components/RegionWarehouses/RegionWarehousesContainer";
import { fetchAllWarehouses } from "../store/slices/warehouseSlice";
import { FC, useEffect, useMemo } from "react";

interface IChecked {
  map: boolean;
  list: boolean;
}

const Warehouses : FC<any> = () => {
  const state = useAppSelector((state) => state.map);
  const warehouses = useAppSelector((state) => state.warehouses);
  const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchAllWarehouses());
    }, [dispatch]);

  return (
    <StandartLayout>
      <Menu />
      {state.map && <Map />}
      {state.list && <List data={warehouses.warehouses} />}
      {state.region && <RegionWarehousesContainer data={warehouses.warehouses} />}
    </StandartLayout>
  );
};

export default Warehouses;
