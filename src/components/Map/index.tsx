import {MapContainer, TileLayer,} from "react-leaflet";
import {Link} from "react-router-dom";
import RepublicPolygons from "./RepublicPolygons";
import WarehousesOnMap from "./WarehousesOnMap";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useEffect} from "react";
import {fetchAllWarehouses} from "../../store/slices/warehouseSlice/services";

const Map = () => {
	const warehouses = useAppSelector(state => state.warehouses)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchAllWarehouses())
	}, []);


	return (
		<div className="h-fit border-2 border-black rounded">
			<div
				className="absolute flex flex-col gap-3 text-center mt-5 ml-10"
				style={{zIndex: 400}}
			>
				<Link
					className="w-full h-full bg-gray-600 rounded py-2 px-3 text-gray-300 items-center
                              cursor-pointer select-none peer-checked:bg-gray-800"
					to="/warehouses/1"
				>
					г. Кызыл
				</Link>
				<Link
					className="w-full h-full bg-gray-600 rounded py-2 px-3 text-gray-300 items-center
                              cursor-pointer select-none peer-checked:bg-gray-800"
					to="/warehouses/2"
				>
					г. Ак-Довурак
				</Link>
			</div>

			<MapContainer
				center={[51.8, 94.15]}
				maxBounds={[[54, 99], [49.4, 88]]}

				zoom={7}
				maxZoom={13}
				minZoom={7}
				zoomControl={false}
				scrollWheelZoom={true}
				doubleClickZoom={false}
				attributionControl={false}
				// dragging={false}
				className="min-h-[600px]"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					opacity={0}
				/>

				<WarehousesOnMap warehouses={warehouses.warehouses}/>
				<RepublicPolygons/>
			</MapContainer>
		</div>
	);
};

export default Map;
