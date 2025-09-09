import { combineSlices } from "@reduxjs/toolkit";
import { globalSlice } from "./global";
import mapSlice from "./mapSlice";
import houseSlice from "./houseSlice";
import reservationSlice from "./reservationSlice";
import userReservationsSlice from "./userReservationsSlice";
import houseDetailSlice from "./housedetail";

const rootReducer = combineSlices( globalSlice,  mapSlice , houseSlice , reservationSlice , userReservationsSlice , houseDetailSlice );

export default rootReducer;
