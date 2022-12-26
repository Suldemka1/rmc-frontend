import React from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {Marker, Popup} from "react-leaflet";
import {Link} from "react-router-dom";
//@ts-ignore
import MarkerClusterGroup from 'react-leaflet-markercluster'
import L from 'leaflet';

interface MarkerOnMap {
	id: number;
	title: [];
	address: {
		longitude: number;
		latitude: number;
	}
}

const WarehousesOnMap: any = () => {
	const state = useAppSelector((state) => state.warehouses)

	const customIcon = new L.Icon({
		iconUrl: require('./markerIcon.png'),
		iconSize: new L.Point(50, 50),
})

	return (
		<>
			{
				state.warehouses?.data?.map((item: any) => {
					const lat = Number(item.address.longitude).toFixed(6)
					const long = Number(item.address.latitude).toFixed(6)

					return (
						<Marker position={[Number(lat), Number(long)]} icon={customIcon}>
							<Popup>
								<h1 className="text-lg">{item.title}</h1>
								<Link to={`/warehouses/0/${item.id}`}>Перейти на страницу</Link>
							</Popup>
						</Marker>
					)
				})
			}
		</>
	);
};

export default WarehousesOnMap;
