import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_blackbaud_event_edit_participant_option_partial_update = createAsyncThunk("editParticipantOptions/modules_blackbaud_event_edit_participant_option_partial_update", async payload => {
  const response = await apiService.modules_blackbaud_event_edit_participant_option_partial_update(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const editParticipantOptionsSlice = createSlice({
  name: "editParticipantOptions",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_blackbaud_event_edit_participant_option_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [modules_blackbaud_event_edit_participant_option_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [modules_blackbaud_event_edit_participant_option_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  modules_blackbaud_event_edit_participant_option_partial_update,
  slice: editParticipantOptionsSlice
};