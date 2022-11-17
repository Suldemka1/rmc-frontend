import StandartLayout from "../layouts/StandartLayout";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import Map from "../components/Map";
import List from "../components/Warehouses/List";
import Menu from "../components/Warehouses/Menu";
import RegionWarehousesContainer from '../components/RegionWarehouses/RegionWarehousesContainer';
import { useLoaderData } from 'react-router-dom';

interface IChecked {
    map: boolean
    list: boolean
}

const Warehouses = () => {
    const state = useAppSelector(state => state.map)
    const dispatch = useAppDispatch()

    const loader : any = useLoaderData()

    return (
        <StandartLayout>
            <Menu/>

            {state.map && <Map/>}
            {state.list && <List data={loader.data}/>}
            {state.region && <RegionWarehousesContainer data={loader.data}/>}

        </StandartLayout>
    );
};

export const RegionWarehouesesLoader = async () => {
    const data = await fetch(`${process.env.REACT_APP_BASEURL}/api/regions?populate[warehouses][populate][0]=contacts&populate[warehouses][populate][1]=Address&populate=[warehouses][populate][2]=brief&populate[warehouses][populate][3]=region`)
    .then((res) => res.json())

    const details = {
        data
    }
  
    return details
  }

export default Warehouses;