import { api } from "@/lib/axios";
import { HouseProps } from "@/types/house";

export const fetchHouses = async (): Promise<HouseProps[]> => {
  const res = await api.get<HouseProps[]>("/house");
  return res.data;
};
