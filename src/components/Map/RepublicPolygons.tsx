import React from 'react';
import polygons from "../../data.json";
import {GeoJSON, Tooltip} from "react-leaflet";
import {useNavigate} from "react-router-dom";

const RepublicPolygons = () => {
	const navigate = useNavigate()
	const renderRepublicBoundaries = polygons.map((item) => {
		return (
			<GeoJSON
				key={item.id}
				// @ts-ignore
				data={item}
				style={() => ({
					color: "rgb(30 64 175)",
					weight: 1,
					fillColor: "rgb(59 130 246)",
					fillOpacity: 1,
				})}
				className="hover:fill-white hover:transition hover:ease-in-out hover:duration-400 outline-none border-none"
				eventHandlers={{
					click: () => navigate(`/regions/${item.id}`)
				}}
			>
				<Tooltip sticky>{item.properties.description}</Tooltip>
			</GeoJSON>
		);
	});

	return (
		<>
			{renderRepublicBoundaries}
		</>
	);
};

export default RepublicPolygons;
