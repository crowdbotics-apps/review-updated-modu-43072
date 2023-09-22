import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_disqus_comment_list = createAsyncThunk("paginatedCommentLists/modules_disqus_comment_list", async payload => {
  const response = await apiService.modules_disqus_comment_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const paginatedCommentListsSlice = createSlice({
  name: "paginatedCommentLists",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_disqus_comment_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [modules_disqus_comment_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [modules_disqus_comment_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  modules_disqus_comment_list,
  slice: paginatedCommentListsSlice
};