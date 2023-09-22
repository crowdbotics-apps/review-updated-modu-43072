import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_blackbaud_constituents_create_constituent_custom_field_collection_create = createAsyncThunk(
  "createConstituentsCustomFieldsCollectionSerializers/modules_blackbaud_constituents_create_constituent_custom_field_collection_create",
  async payload => {
    const response = await apiService.modules_blackbaud_constituents_create_constituent_custom_field_collection_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createConstituentsCustomFieldsCollectionSerializersSlice = createSlice({
  name: "createConstituentsCustomFieldsCollectionSerializers",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_blackbaud_constituents_create_constituent_custom_field_collection_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_blackbaud_constituents_create_constituent_custom_field_collection_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_blackbaud_constituents_create_constituent_custom_field_collection_create.rejected]: (
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
  modules_blackbaud_constituents_create_constituent_custom_field_collection_create,
  slice: createConstituentsCustomFieldsCollectionSerializersSlice
}
