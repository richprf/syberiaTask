import React, { useState } from "react";
import { Pagination } from "@heroui/react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/types";
import HouseCard from "./houseCard";

const PAGE_SIZE = 8;
const HouseListMobile = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredHouses } = useAppSelector((state: RootState) => state.houses);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const housesToShow = filteredHouses?.slice(start, end);
  const totalPages = Math.ceil(filteredHouses?.length / PAGE_SIZE);

  return (
    <div className="md:hidden grid grid-cols-2 gap-6 pt-8 pl-[14px] pb-4">
      {housesToShow?.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
      <div className="flex justify-center">
        <Pagination
          initialPage={1}
          total={totalPages}
          onChange={(p: number) => setCurrentPage(p)}
        />
      </div>
    </div>
  );
};

export default HouseListMobile;
