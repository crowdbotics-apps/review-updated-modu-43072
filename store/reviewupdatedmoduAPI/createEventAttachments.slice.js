import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_blackbaud_event_create_event_attachment_create = createAsyncThunk("createEventAttachments/modules_blackbaud_event_create_event_attachment_create", async payload => {
  const response = await apiService.modules_blackbaud_event_create_event_attachment_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const createEventAttachmentsSlice = createSlice({
  name: "createEventAttachments",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_blackbaud_event_create_event_attachment_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [modules_blackbaud_event_create_event_attachment_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [modules_blackbaud_event_create_event_attachment_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  modules_blackbaud_event_create_event_attachment_create,
  slice: createEventAttachmentsSlice
};