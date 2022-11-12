import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { youTubeVideos } from './youtube/youtube-process';

export const rootReducer = combineReducers({
  [NameSpace.YouTube]: youTubeVideos.reducer
});
