import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HouseProps } from "@/types/house";

interface FilterState {
  destination: string;
  minPrice: number | null;
  maxPrice: number | null;
  minRate: number | null;
}

interface HouseState {
  allHouses: HouseProps[];
  filteredHouses: HouseProps[];
  searchQuery: string;
  filters: FilterState;
}

const initialState: HouseState = {
  allHouses: [],
  filteredHouses: [],
  searchQuery: "",
  filters: {
    destination: "",
    minPrice: null,
    maxPrice: null,
    minRate: null,
  },
};

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    setHouses: (state, action: PayloadAction<HouseProps[]>) => {
      state.allHouses = action.payload;
      state.filteredHouses = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredHouses = applyFilters(state);
    },
    setFilters: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredHouses = applyFilters(state);
    },
    resetFilters: (state) => {
      state.filters = {
        destination: "",
        minPrice: null,
        maxPrice: null,
        minRate: null,
      };
      state.filteredHouses = applyFilters(state);
    },
  },
});


function applyFilters(state: HouseState) {
  return state.allHouses.filter((house) => {
    const matchesSearch =
      house.title.toLowerCase().includes(state.searchQuery.toLowerCase());

    const matchesDestination =
      state.filters.destination === "" ||
      house.address.toLowerCase().includes(state.filters.destination.toLowerCase());

    const price = Number(house.price);
    const matchesPrice =
      (state.filters.minPrice === null || price >= state.filters.minPrice) &&
      (state.filters.maxPrice === null || price <= state.filters.maxPrice);

    const rate = Number(house.rate);
    const matchesRate =
      state.filters.minRate === null || rate >= state.filters.minRate;

    return matchesSearch && matchesDestination && matchesPrice && matchesRate;
  });
}

export const { setHouses, setSearchQuery, setFilters , resetFilters } = houseSlice.actions;
export default houseSlice;
