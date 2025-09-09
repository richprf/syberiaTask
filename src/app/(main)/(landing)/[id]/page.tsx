"use client";

import ImageSwiper from "@/componets/common/imageSwiper/imageSwiper";
import HouseDetailBread from "@/componets/houseDetail/houseDetailBread";
import HouseReserveContainer from "@/componets/houseDetail/houseDetailContainer";
import HouseReserveTitle from "@/componets/houseDetail/houseDetailTitle";
import { fetchHousesDetail } from "@/lib/fetchHouse";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const params = useParams();
  const id = params?.id;

  const images = [
    "/assets/houseReserve/house7.jpg",
    "/assets/houseReserve/house9.jpg",
    "/assets/houseReserve/house10.jpg",
    "/assets/houseReserve/house11.jpg",
    "/assets/houseReserve/house12.jpg",
    "/assets/houseReserve/house13.jpg",
    "/assets/houseReserve/house14.jpg",
    "/assets/houseReserve/house15.jpg",
    "/assets/houseReserve/house16.png",
  ];

  const {
    data: reserveDeatail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reserveDeatail"],
    queryFn: () => fetchHousesDetail(id as string),
  });

  if (error) {
    return (
      <p className="text-center text-xl mb-14">خطا در دریافت اطلاعات :(</p>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-14">
        <Spinner color="secondary" size="lg" />
      </div>
    );
  }

  return (
    <div className="pr-[56px] pl-[56px]">
      <div className="flex justify-center pt-10">
        <HouseDetailBread />
      </div>
      <div className="pt-12">
        <ImageSwiper images={images} />
      </div>
      <div>
        {reserveDeatail && (
          <HouseReserveTitle
            title={reserveDeatail?.title}
            address={reserveDeatail?.address}
          />
        )}
      </div>
      <div className="pt-10">
        {reserveDeatail && (
          <HouseReserveContainer reserveDeatail={reserveDeatail} />
        )}
      </div>
    </div>
  );
};

export default page;
