"use client";
import { Marker, Popup } from "react-leaflet";
import { TfiMapAlt } from "react-icons/tfi";
import { GoChevronLeft } from "react-icons/go";
import { HouseProps } from "@/types/house";

interface HouseMarkerProps {
  house: HouseProps;
}

const HouseMarker: React.FC<HouseMarkerProps> = ({ house }) => {
  return (
    <Marker position={[house.lat, house.lng]}>
      <Popup>
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-full bg-red-200">
            <img
              className="w-12 h-12 rounded-full"
              src={"/assets/houseReserve/house.png"}
              alt={house.title}
            />
          </div>
          <div className="text-start">
            <div className="font-bold text-[16px]">{house.title}</div>
            <div className="flex gap-2 items-center pt-[5px]">
              <TfiMapAlt size={17} />
              {house.address}
            </div>
            <div className="pt-3">
              <div className="relative inline-block text-[#A6A6A6] font-bold opacity-50">
                {house.price} تومان
                <span className="absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg]" />
              </div>
              /
              <span className="font-bold text-black text-[16px] inline dark:text-slate-300">
                {house.price} تومان
              </span>
            </div>
            <div className="pt-[13px] hover:text-blue-600 font-bold">
              <div className="flex gap-1">
                <span>جزییات بیشتر و رزرو</span>
                <GoChevronLeft />
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default HouseMarker;
