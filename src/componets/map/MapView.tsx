"use client";
import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { HouseProps } from "@/types/house";
import { RootState } from "@/types";
import HouseListMobile from "../houseList/houseListMobile";
import HousesList from "../houseList/housesList";
import HouseMarker from "./HouseMarker";
import FlyToLocation from "./flytoLocation";

interface MapViewProps {
  houses: HouseProps[];
}

const MapViews: React.FC<MapViewProps> = ({ houses }) => {
  const position: [number, number] = [36.5658, 53.0586];
  const IsDarkMode = useSelector(
    (state: RootState) => state.global.theme === "dark"
  );
  const selectedLocation = useSelector(
    (state: RootState) => state.map.selectedLocation
  );

  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetainUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  const titleUrl = IsDarkMode
    ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  const attribution = IsDarkMode
    ? "&copy; CartoDB"
    : "&copy; Openstreetmap contributors";

  return (
    <>
      <div className="relative w-full h-screen">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom
          className="h-full w-full z-0"
        >
          <TileLayer attribution={attribution} url={titleUrl} />

          {houses.map((house) => (
            <HouseMarker key={house.id} house={house} />
          ))}

          {selectedLocation && (
            <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
              <FlyToLocation
                lat={selectedLocation.lat}
                lng={selectedLocation.lng}
              />
            </Marker>
          )}
        </MapContainer>

        <HousesList houses={houses} />
      </div>

      <HouseListMobile />
    </>
  );
};

export default MapViews;
