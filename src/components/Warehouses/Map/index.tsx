import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const Map = () => {

    return (
        <div className="min-h-[300px] max-h-[600px] min-w-[300px] max-w-full w-full h-full border-2 border-black rounded">
            <MapContainer center={[51.7, 94.4]} zoom={7} scrollWheelZoom={false} attributionControl={false} className="w-full h-full">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[51.7, 94.4]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    );
};

export default Map;