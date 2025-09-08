import { combineSlices } from "@reduxjs/toolkit";
import { globalSlice } from "./global";
import mapSlice from "./mapSlice";
import houseSlice from "./houseSlice";


const rootReducer = combineSlices( globalSlice,  mapSlice , houseSlice );

export default rootReducer;
