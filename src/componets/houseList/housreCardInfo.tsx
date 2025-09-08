import { FC } from "react";
import { PiBellSimpleRinging } from "react-icons/pi";
import { TfiMapAlt } from "react-icons/tfi";
import { HouseProps } from "@/types/house";

const HouseCardInfo: FC<{ house: HouseProps }> = ({ house }) => {
  return (
    <div className="p-3 space-y-1 text-sm text-gray-800 dark:text-gray-200">
      <h3 className="font-bold text-lg pt-4">{house.title}</h3>

      <div className="flex items-center space-x-2 text-sm text-black dark:text-gray-400 pt-4">
        <div className="rounded-full bg-[#f3f3f3] dark:bg-zinc-600 flex items-center justify-center">
          <TfiMapAlt size={21} />
        </div>
        <span className="pr-2 truncate w-64">{house.address}</span>
        <div className="rounded-full bg-[#f3f3f3] dark:bg-zinc-600 flex items-center justify-center">
          <PiBellSimpleRinging size={21} />
        </div>
        <span className="text-black dark:text-slate-300 flex gap-1">
          <span>{house.capacity}</span> <span>شب</span>
        </span>
      </div>

      <div className="flex items-center justify-between mt-2 pt-4">
        <div>
          <div className="relative inline-block text-gray-400 font-bold opacity-50">
            {house.price} تومان
            <span className="absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg]" />
          </div>
          /
          <span className="font-bold text-black text-base inline dark:text-slate-300">
            {house.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HouseCardInfo;
