import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_openai_audio_transcription_create = createAsyncThunk("createTranslations/modules_openai_audio_transcription_create", async payload => {
  const response = await apiService.modules_openai_audio_transcription_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const createTranslationsSlice = createSlice({
  name: "createTranslations",
  initialState,
  reducers: {},
  extraReducers: {
    [modules_openai_audio_transcription_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [modules_openai_audio_transcription_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [modules_openai_audio_transcription_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  modules_openai_audio_transcription_create,
  slice: createTranslationsSlice
};