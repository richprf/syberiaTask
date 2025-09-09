import { api } from "@/lib/axios";
import { HouseProps } from "@/types/house";

export const fetchHouses = async (): Promise<HouseProps[]> => {
  const res = await api.get<HouseProps[]>("/house");
  return res.data;
};

export const fetchHousesDetail = async (id: string): Promise<HouseProps> => {
  const res = await api.get<HouseProps>(`/house/${id}`);
  return res.data;
};
