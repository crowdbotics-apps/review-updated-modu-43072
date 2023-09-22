import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_blackbaud_constituent_create_rating_create = createAsyncThunk("createConstituentRatingSerializers/modules_blackbaud_constituent_create_rating_create", async payload => {
  const response = await apiService.modules_blackbaud_constituent_create_rating_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const createConstituentRatingSerializersSlice = createSlice({
  name: "createConstituentRatingSerializers",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_blackbaud_constituent_create_rating_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [modules_blackbaud_constituent_create_rating_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [modules_blackbaud_constituent_create_rating_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  modules_blackbaud_constituent_create_rating_create,
  slice: createConstituentRatingSerializersSlice
};