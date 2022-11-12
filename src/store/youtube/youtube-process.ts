import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { YouTubeState} from '../../types/store';
import { fetchYouTubeVideos } from '../api-actions';

const initialState: YouTubeState = {
  youTubeVideos: [],
  status: FetchStatus.Idle
};

export const youTubeVideos = createSlice({
  name: NameSpace.YouTube,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchYouTubeVideos.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchYouTubeVideos.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      })
      .addCase(fetchYouTubeVideos.fulfilled, (state, action) => {
        state.youTubeVideos = action.payload;
        state.status = FetchStatus.Success;
      });
  }
});
