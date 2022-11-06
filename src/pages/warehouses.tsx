import React from 'react';
import StandartLayout from "../layouts/StandartLayout";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Map from "../components/Warehouses/Map";
import List from "../components/Warehouses/List";
import Menu from "../components/Warehouses/Menu";

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

        </StandartLayout>
    );
};

export default Warehouses;