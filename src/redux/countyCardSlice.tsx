import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface countyState {
  value: number;
}

const initialState = {
  grantsFrom: { value: 1 },
  grantsTo: { value: 51 },
};

const emptyState = {
  grantsFrom: { value: -1 },
  grantsTo: { value: -1 },
};

export const countyCardSlice = createSlice({
  name: "filterCounty",
  initialState,
  reducers: {
    filteredCountyFrom: (state, action) => {
      state.grantsFrom.value = action.payload;
    },
    filteredCountyTo: (state, action) => {
      state.grantsTo.value = action.payload;
    },
    resetCounty: () => {
      return initialState;
    },
    emptyCounty: () => {
      return emptyState;
    },
  },
});

export const {
  filteredCountyFrom,
  filteredCountyTo,
  resetCounty,
  emptyCounty,
} = countyCardSlice.actions;

export default countyCardSlice.reducer;
