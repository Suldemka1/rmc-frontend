import React, {useCallback, useEffect} from 'react';
import { useAppSelector} from "../../hooks/hooks";
import {Marker} from "react-leaflet";

const WarehousesOnMap: any = () => {
	const state = useAppSelector((state) => state.warehouses)

	return (
		<>
			{
				state.warehouses.map((item: any) => {
					return (
						<>
							<Marker position={[50, 94]}></Marker>
						</>

					)
				})
			}
		</>
	);
};

export default WarehousesOnMap;
