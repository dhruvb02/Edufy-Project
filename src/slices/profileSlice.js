import { createSlice } from "@reduxjs/toolkit";
import { getUserStorage } from "../utils/tokenUtils";

const initialState = {
  user: getUserStorage(),
  loading: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;