import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_hubspot_service_deals_associations_create_create = createAsyncThunk(
  "dealAssociations/modules_hubspot_service_deals_associations_create_create",
  async payload => {
    const response = await apiService.modules_hubspot_service_deals_associations_create_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dealAssociationsSlice = createSlice({
  name: "dealAssociations",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_hubspot_service_deals_associations_create_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_hubspot_service_deals_associations_create_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_hubspot_service_deals_associations_create_create.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  modules_hubspot_service_deals_associations_create_create,
  slice: dealAssociationsSlice
}
