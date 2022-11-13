import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { ScheduleState } from '../../types/store';
import { fetchShedule } from '../api-actions';

const initialState: ScheduleState = {
  schedule: [],
  status: FetchStatus.Idle
};

export const scheduleProcess = createSlice({
  name: NameSpace.Schedule,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchShedule.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchShedule.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      })
      .addCase(fetchShedule.fulfilled, (state, action) => {
        state.schedule = action.payload;
        state.status = FetchStatus.Success;
      });
  }
});
