import React from 'react';
import {GeoJSON, MapContainer, Marker, Popup, TileLayer, Tooltip} from "react-leaflet";
import polygons from '../../../data.json'
import {Link} from "react-router-dom";

const Map = () => {
    const renderRepublicBoundaries = polygons.map(item => {

        return (
            <GeoJSON
                key={item.id}
                // @ts-ignore
                data={item}
                style={() => ({
                    color: '#4a83ec',
                    weight: 1,
                    fillColor: "#1a1d62",
                    fillOpacity: 1
                })}
                className="hover:fill-white hover:transition hover:ease-in-out hover:duration-400"
                onEachFeature={() => {
                    console.log(item.properties.description)
                }}
            >
                 <Tooltip sticky>{item.properties.description}</Tooltip>
            </GeoJSON>
        )

    })
    return (
        <div
            className="h-fit border-2 border-black rounded">
            <div className="absolute flex flex-col gap-3 text-center mt-5 ml-10" style={{zIndex: 400}}>
                <Link className="w-full h-full bg-gray-600 rounded py-2 px-3 text-gray-300 items-center
                              cursor-pointer select-none peer-checked:bg-gray-800" to="/">г. Кызыл
                </Link>
                <Link className="w-full h-full bg-gray-600 rounded py-2 px-3 text-gray-300 items-center
                              cursor-pointer select-none peer-checked:bg-gray-800" to="/">г. Ак-Довурак
                </Link>
            </div>

            <MapContainer center={[51.8, 94.15]}
                          zoom={7}
                          zoomControl={false}
                          scrollWheelZoom={false}
                          doubleClickZoom={false}
                          attributionControl={false}
                          dragging={false}
                          className="min-h-[600px]">
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