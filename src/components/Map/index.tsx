import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import polygons from "../../data.json";
import { Link } from "react-router-dom";
//@ts-ignore
function onEachFeature(feature, layer) {
  layer.on({
    click: console.log('fuck you')
  })
}

const Map = () => {
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
        onEachFeature={onEachFeature}
      >
        <Tooltip sticky>{item.properties.description}</Tooltip>
        <Popup>
          <div className="flex flex-col gap-3">
            {/* <div className="text-md">
              <h1 className="">Количество складов 2</h1>
              <p>Примерное количество угля 10 тонн</p>
            </div> */}
            <div className="text-center text-[18px] border-2 border-blue-800 py px-2 rounded-md">
              <Link to={`/warehouses/${item.id}`} className="text-blue-900">
                Склады района
              </Link>
            </div>
          </div>
        </Popup>
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
          to="/"
        >
          г. Кызыл
        </Link>
        <Link
          className="w-full h-full bg-gray-600 rounded py-2 px-3 text-gray-300 items-center
                              cursor-pointer select-none peer-checked:bg-gray-800"
          to="/"
        >
          г. Ак-Довурак
        </Link>
      </div>

      <MapContainer
        center={[51.8, 94.15]}
        zoom={7}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        attributionControl={false}
        dragging={false}
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
