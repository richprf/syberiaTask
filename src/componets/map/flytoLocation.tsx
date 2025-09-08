"use client";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface FlyToLocationProps {
  lat: number;
  lng: number;
}

const FlyToLocation: React.FC<FlyToLocationProps> = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], 16);
  }, [lat, lng, map]);

  return null;
};

export default FlyToLocation;
