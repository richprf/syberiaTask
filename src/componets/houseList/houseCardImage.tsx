import { FC } from "react";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { MapPin } from "lucide-react";
import { useDispatch } from "react-redux";
import { setPosition } from "@/redux/slices/mapSlice";
import { HouseProps } from "@/types/house";
import Image from "next/image";

const HouseCardImage: FC<{ house: HouseProps }> = ({ house }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative rounded-[24px]">
      <Link href={"/" + house.id}>
        <Image
          src={"/assets/houseReserve/house.png"}
          alt={house.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-[24px]"
        />
      </Link>

      <div className="absolute top-2 left-2 font-bold text-sm bg-[#7575fe] text-white px-2 py-1 rounded-full flex items-center space-x-1">
        <AiOutlineHeart size={20} />
        <span>{house.rate}</span>
      </div>

      <div className="absolute top-2 left-[58px] bg-red-500 text-white text-xs px-2 py-1 font-bold rounded-full">
        %15 -
      </div>

      <div className="absolute bottom-2 left-2 group" dir="ltr">
        <div className="flex items-center space-x-1">
          <div
            className="bg-[#7575fe] text-white text-xs p-2 rounded-full cursor-pointer"
            onClick={() =>
              dispatch(setPosition({ lat: house.lat, lng: house.lng }))
            }
          >
            <MapPin className="text-white w-5 h-5" />
          </div>
          <span className="bg-[#7575fe] text-white text-xs px-2 py-1 rounded-full opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            نمایش داخل نقشه
          </span>
        </div>
      </div>
    </div>
  );
};

export default HouseCardImage;
