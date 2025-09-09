import { combineSlices } from "@reduxjs/toolkit";
import { globalSlice } from "./global";
import mapSlice from "./mapSlice";
import houseSlice from "./houseSlice";
import reservationSlice from "./reservationSlice";

const rootReducer = combineSlices( globalSlice,  mapSlice , houseSlice , reservationSlice );

export default rootReducer;
