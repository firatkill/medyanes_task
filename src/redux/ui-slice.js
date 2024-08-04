import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    activeFilter: "all",
    activeModal: null,
    loading: false,
  },
  reducers: {
    assignFilter(state, action) {
      state.activeFilter = action.payload;
    },
    setModal(state, action) {
      state.activeModal = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
