import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import polygons from "../../data.json";
import { Link, useNavigate } from "react-router-dom";

const Map = () => {
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
          click: () => navigate(`/warehouses/${item.id}`)
        }}
      >
        <Tooltip sticky>{item.properties.description}</Tooltip>
      </GeoJSON>
    );
  });
  return (
    <div className="h-fit border-2 border-black rounded">
      <div
        className="absolute flex flex-col gap-3 text-center mt-5 ml-10"
        style={{ zIndex: 400 }}
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
        maxZoom={10}
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

        {renderRepublicBoundaries}
      </MapContainer>
    </div>
  );
};

export default Map;
