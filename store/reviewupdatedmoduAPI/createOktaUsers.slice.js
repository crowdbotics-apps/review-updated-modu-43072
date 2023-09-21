import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_okta_create_user_create = createAsyncThunk(
  "createOktaUsers/modules_okta_create_user_create",
  async payload => {
    const response = await apiService.modules_okta_create_user_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createOktaUsersSlice = createSlice({
  name: "createOktaUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_okta_create_user_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_okta_create_user_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_okta_create_user_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { modules_okta_create_user_create, slice: createOktaUsersSlice }
