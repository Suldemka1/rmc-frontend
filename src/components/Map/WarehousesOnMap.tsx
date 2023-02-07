import { useAppSelector } from "../../hooks/hooks";
import { Marker, Tooltip } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from 'leaflet';

interface MarkerOnMap {
	id: number;
	title: [];
	address: {
		region: String,
		longitude: number;
		latitude: number;
	}
}

const customIcon = new L.Icon({
	iconUrl: require('./markerIcon.png'),
	iconSize: new L.Point(50, 50),
})

const WarehousesOnMap: any = () => {
	const state = useAppSelector((state) => state.warehouses)
	const navigate = useNavigate()
	return (
		<>
			{
				state.warehouses?.data?.map((item: any, index) => {
					const lat = Number(item.address.longitude).toFixed(6)
					const long = Number(item.address.latitude).toFixed(6)
					return (
						<Marker
							position={[Number(lat), Number(long)]}
							icon={customIcon}
							key={index + 100}
							eventHandlers={{
								click: () => {
									navigate(`/warehouses/${item.id}`)
								}
							}}

						>
							<Tooltip>
								<strong>
									{item.title}
								</strong>
							</Tooltip>
						</Marker>
					)
				})
			}
		</>
	);
};

export default WarehousesOnMap;
