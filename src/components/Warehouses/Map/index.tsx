import React from 'react';
import {GeoJSON, MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";
import polygons from '../../../data.json'
import {Link} from "react-router-dom";

const Map = () => {
    const renderRepublicBoundaries = polygons.map(item => {

        return (
            <Link to="/"><GeoJSON
                key={item.id}
                // @ts-ignore
                data={item}
                style={() => ({
                    color: '#4a83ec',
                    weight: 1,
                    fillColor: "#1a1d62",
                    fillOpacity: 1
                })}
                className="hover:fill-white"
            >
                <Tooltip sticky>{item.properties.description}</Tooltip>
            </GeoJSON>
            </Link>
        )

    })
    return (
        <div
            className=" max-h-[600px] max-w-full w-full h-full border-2 border-black rounded">
            <MapContainer center={[51.8, 94.15]}
                          zoom={7}
                          zoomControl={false}
                          scrollWheelZoom={false}
                          doubleClickZoom={false}
                          attributionControl={false}
                          dragging={false}

                          className="w-full h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    opacity={0}
                />

                {renderRepublicBoundaries}

            </MapContainer>
        </div>
    );
};

export default Map;