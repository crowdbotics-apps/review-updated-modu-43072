import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_okta_login_create = createAsyncThunk(
  "oktaUserLogins/modules_okta_login_create",
  async payload => {
    const response = await apiService.modules_okta_login_create(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const oktaUserLoginsSlice = createSlice({
  name: "oktaUserLogins",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_okta_login_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [modules_okta_login_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [modules_okta_login_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { modules_okta_login_create, slice: oktaUserLoginsSlice }
