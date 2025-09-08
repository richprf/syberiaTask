"use client";
import { FC, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { Pagination } from "@heroui/react";
import { RootState } from "@/types";
import { setSearchQuery } from "@/redux/slices/houseSlice";
import { useDispatch } from "react-redux";
import BreadCrumbsComponents from "../common/breadCrumbs/breadCrumbs";

import { HouseProps } from "@/types/house";
import SearchBar from "./searchBar";
import HouseCard from "./houseCard";

interface MapViewProps {
  houses: HouseProps[];
}

const PAGE_SIZE = 8;

const HousesList: FC<MapViewProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { allHouses, filteredHouses } = useAppSelector((state: RootState) => state.houses);

  console.log("همه:", allHouses.length);
console.log("فیلتر:", filteredHouses.length);

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const housesToShow = filteredHouses?.slice(start, end);
  const totalPages = Math.ceil(filteredHouses?.length / PAGE_SIZE);

  const handleSearch = (q: string) => {
    dispatch(setSearchQuery(q));
    setCurrentPage(1);
  };

  console.log("filteredHouses" , filteredHouses)

  return (
    <div className="hidden md:flex flex-col gap-3 absolute top-0 right-0 max-w-[540px] h-screen overflow-y-auto z-10 space-y-3 rounded-l-[32px] bg-white dark:bg-dark-200 pr-[56px]">
      <div className="w-full pt-[55px]">
        <BreadCrumbsComponents />
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-2 gap-6 pt-2 pl-[14px] pb-8">
        {housesToShow?.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>

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

export default HousesList;
