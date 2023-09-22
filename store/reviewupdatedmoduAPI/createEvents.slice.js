import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_blackbaud_event_create_event_create = createAsyncThunk(
  "createEvents/modules_blackbaud_event_create_event_create",
  async payload => {
    const response = await apiService.modules_blackbaud_event_create_event_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createEventsSlice = createSlice({
  name: "createEvents",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_blackbaud_event_create_event_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_blackbaud_event_create_event_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_blackbaud_event_create_event_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  modules_blackbaud_event_create_event_create,
  slice: createEventsSlice
}
