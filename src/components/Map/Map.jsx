import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotels } from "../context/HotelProvider";
import { useEffect, useState } from "react";
import { divIcon, icon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Link, useSearchParams } from "react-router-dom";
import useGeoLocation from "../../hooks/useGeoLocation";

function Map() {
  const { hotels } = useHotels();
  const [mapCenter, setMapCenter] = useState([48.8566, 2.3522]);
  const [serchParams] = useSearchParams();
  const lat = serchParams.get("lat");
  const lng = serchParams.get("lng");

  const {
    isLoading: isLoadingPosition,
    position: geoLocationPosition,
    getPosition,
  } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (geoLocationPosition?.lat && geoLocationPosition?.lng)
      setMapCenter([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);

  const customIcon = new icon({
    iconUrl: "/img/marker-icon.png",
    iconSize: [30, 30],
  });

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<div class="bg-red-600 rounded-full text-with flex items-center justify-center text-base font-medium w-3/4 xl:text-lg xl:px-1 xl:font-semibold  h-auto ">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <div className="mx-6">
      <MapContainer
        className="h-80 sm:h-72  lg:h-72 xl:h-[30rem] bg-zinc-200 W-max-[50rem]"
        center={mapCenter}
        zoom={7}
        scrollWheelZoom={true}
      >
        <button
          onClick={getPosition}
          className="absolute py-1 px-2 font-semibold mobile-md:font-bold bg-indigo-700 shadow-lg shadow-indigo-700/50 hover:bg-indigo-500 transition ease-in-out delay-100 text-xs md-custom:text-sm bottom-8 left-6 rounded-md  text-zinc-50 z-100"
        >
          {isLoadingPosition ? "Loading ..." : "Use Your Location"}
        </button>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <ChangeCenter position={mapCenter} />
        <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
          {hotels.map((item) => (
            <Marker
              key={item.id}
              position={[item.latitude, item.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div className="w-40">
                  <div className="h-full w-full pb-3 px-0">
                    <h1 className="text-1xl my-3 w-full">
                      {item.host_location}
                    </h1>
                    <Link
                      key={item.id}
                      to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
                    >
                      <img
                        className="rounded-md"
                        src={item.thumbnail_url}
                        alt={item.name}
                      />
                    </Link>
                    <div className="flex items-center justify-between w-full">
                      <p className="font-semibold text-sm">
                        {item.smart_location}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-sm font-semibold">
                          {item.star}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm h-2">
                      <p className="text-black font-black rounded-lg m-0">
                        €&nbsp;{item.PricePerNight}&nbsp;
                      </p>
                      <span className="text-stone-800 font-medium">night</span>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
