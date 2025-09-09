import React, { FC, useState } from "react";
import { HouseProps } from "@/types/house";
import HouseButton from "../common/blueButton/houseButton";
import HouseInformationMobile from "./houseInformationMobile";
import HouseInformation from "./houseInformation";
import HouseAbout from "./houseAbout";
import ReservationForm from "./housereserveInput";



interface reserveDeatailtype {
  reserveDeatail: HouseProps;
}

const HouseReserveContainer: FC<reserveDeatailtype> = ({ reserveDeatail }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-[113px]">
        <div>
          <div className="hidden md:block">
            <HouseButton
              label="امکانات هتل"
              className=" w-[133px] h-[45px] flex items-center justify-center rounded-[100px] text-[#7575fefe] border border-[#7575fefe] "
            />
          </div>
          <div>
            <HouseInformationMobile />
            <HouseInformation reserveDeatail={reserveDeatail} />
          </div>
          <div>
            <ReservationForm />
          </div>
        </div>
        <div>
          <div></div>

          <div>
            <div></div>
            <HouseAbout />
          </div>

          <div className="hidden md:block pt-12">
            <div></div>
          </div>
        </div>
      </div>
      <div className=" mx-auto md:mx-0 pt-[84px] pb-[64px] "></div>
    </>
  );
};

export default HouseReserveContainer;
