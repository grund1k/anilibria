import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus, NameSpace } from '../../const';
import { ChangesState } from '../../types/store';
import { fetchChanges } from '../api-actions';

const initialState: ChangesState = {
  changes: [],
  status: FetchStatus.Idle
};

export const changesProcess = createSlice({
  name: NameSpace.Changes,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchChanges.pending, (state) => {
        state.status = FetchStatus.Pending;
      })
      .addCase(fetchChanges.rejected, (state) => {
        state.status = FetchStatus.Rejected;
      })
      .addCase(fetchChanges.fulfilled, (state, action) => {
        state.changes = action.payload;
        state.status = FetchStatus.Success;
      });
  }
});
