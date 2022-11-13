import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { changesProcess } from './changes/changes-process';
import { scheduleProcess } from './schedule/schedule-process';
import { youTubeVideos } from './youtube/youtube-process';

export const rootReducer = combineReducers({
  [NameSpace.YouTube]: youTubeVideos.reducer,
  [NameSpace.Changes]: changesProcess.reducer,
  [NameSpace.Schedule]: scheduleProcess.reducer,
});
