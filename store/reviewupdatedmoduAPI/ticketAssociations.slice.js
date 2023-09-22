import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_hubspot_service_ticket_associations_create_update = createAsyncThunk("ticketAssociations/modules_hubspot_service_ticket_associations_create_update", async payload => {
  const response = await apiService.modules_hubspot_service_ticket_associations_create_update(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const ticketAssociationsSlice = createSlice({
  name: "ticketAssociations",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_hubspot_service_ticket_associations_create_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [modules_hubspot_service_ticket_associations_create_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [modules_hubspot_service_ticket_associations_create_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  modules_hubspot_service_ticket_associations_create_update,
  slice: ticketAssociationsSlice
};