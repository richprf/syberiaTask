"use client";

import MapViews from "@/componets/map/MapView";
import { fetchHouses } from "@/lib/fetchHouse";
import { setHouses } from "@/redux/slices/houseSlice";
import { Spinner } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const {
    data: houses,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["houses"],
    queryFn: fetchHouses,
  });

  useEffect(() => {
    if (houses) {
      dispatch(setHouses(houses));
    }
  }, [houses, dispatch]);

  if (error) {
    return (
      <p className="text-center text-xl mb-14"> چیزی دنیه برار (خوش گلدین) </p>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center my-14">
        <Spinner color="secondary" size="lg" />
      </div>
    );
  }

  return <div>{houses && <MapViews houses={houses} />}</div>;
};

export default page;
