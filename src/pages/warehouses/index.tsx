import StandartLayout from "../../layouts/StandartLayout";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import Map from "../../components/Map";
import List from "../../components/Warehouses/List";
import Menu from "../../components/Map/Menu";
import RegionWarehouses from "../../components/RegionWarehouses";
import React, {FC, useEffect} from "react";
import {fetchAllWarehouses} from "../../store/slices/warehouseSlice/services";
import  {fetchAllRegions} from "../../store/slices/regionsSlice/services";

interface IChecked {
  map: boolean;
  list: boolean;
}

const Warehouses: FC = () => {
  const state = useAppSelector((state) => state.map);
  const warehouses = useAppSelector((state) => state.warehouses);
  const regions = useAppSelector(state => state.regions)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllRegions())

  }, []);

  useEffect(() => {
    dispatch(fetchAllWarehouses())
  }, []);

  return (
      <StandartLayout>
        <Menu/>
        {state.map && <Map/>}
        {state.list && (<List warehouses={warehouses?.warehouses}/>)}
        {state.region && (<RegionWarehouses regions={regions?.regions}/>)}
      </StandartLayout>
  );
};

export default React.memo(Warehouses);
