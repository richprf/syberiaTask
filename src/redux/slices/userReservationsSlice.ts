import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HouseProps } from "@/types/house";

export interface UserReservation {
  house: HouseProps | null;
  startDate: string;
  endDate: string;
  status: "pending" | "confirmed";
}

interface UserReservationsState {
  reservations: UserReservation[];
}

const initialState: UserReservationsState = {
  reservations: [],
};

const userReservationsSlice = createSlice({
  name: "userReservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<UserReservation>) => {
      state.reservations.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.reservations.splice(action.payload, 1);
    },
    resetReservations: (state) => {
      state.reservations = [];
    },
  },
});

export const { addReservation, removeReservation, resetReservations } =
  userReservationsSlice.actions;
export default userReservationsSlice;
