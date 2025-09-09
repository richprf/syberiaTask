// redux/slices/reservationSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReservationState {
  name: string;
  email: string;
  phone: string;
  startDate: Date | null;
  endDate: Date | null;
  cardNumber: string;
}

const initialState: ReservationState = {
  name: "",
  email: "",
  phone: "",
  startDate: null,
  endDate: null,
  cardNumber: "",
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    updateReservation: (state, action: PayloadAction<Partial<ReservationState>>) => {
      Object.assign(state, action.payload);
    },
    resetReservation: () => initialState,
  },
});

export const { updateReservation, resetReservation } = reservationSlice.actions;
export default reservationSlice;
