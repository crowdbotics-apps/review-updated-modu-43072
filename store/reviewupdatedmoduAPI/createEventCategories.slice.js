import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_blackbaud_event_create_event_category_create = createAsyncThunk(
  "createEventCategories/modules_blackbaud_event_create_event_category_create",
  async payload => {
    const response = await apiService.modules_blackbaud_event_create_event_category_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createEventCategoriesSlice = createSlice({
  name: "createEventCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_blackbaud_event_create_event_category_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_blackbaud_event_create_event_category_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_blackbaud_event_create_event_category_create.rejected]: (
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
  modules_blackbaud_event_create_event_category_create,
  slice: createEventCategoriesSlice
}
