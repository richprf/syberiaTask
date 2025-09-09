// redux/slices/houseDetailSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HouseProps } from "@/types/house";

interface HouseDetailState {
  house: HouseProps | null;
}

const initialState: HouseDetailState = {
  house: null,
};

const houseDetailSlice = createSlice({
  name: "houseDetail",
  initialState,
  reducers: {
    setHouseDetail: (state, action: PayloadAction<HouseProps>) => {
      state.house = action.payload;
    },
    clearHouseDetail: (state) => {
      state.house = null;
    },
  },
});

export const { setHouseDetail, clearHouseDetail } = houseDetailSlice.actions;
export default houseDetailSlice;
