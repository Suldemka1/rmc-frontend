import React from 'react';
import StandartLayout from "../layouts/StandartLayout";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Map from "../components/Map";
import List from "../components/Warehouses/List";
import Menu from "../components/Warehouses/Menu";
import RegionWarehousesContainer from '../components/Warehouses/RegionWarehouses/RegionWarehousesContainer';

interface IChecked {
    map: boolean
    list: boolean
}

const Warehouses = () => {
    const state = useAppSelector(state => state.map)
    const dispatch = useAppDispatch()


    return (
        <StandartLayout>
            <Menu/>

            {state.map && <Map/>}
            {state.list && <List/>}
            {state.region && <RegionWarehousesContainer/>}

        </StandartLayout>
    );
};

export default Warehouses;