import {store} from '../store';
import { Schedule } from './schedule';
import { Titles } from './title';
import { YouTubeVideos } from './youtube';

export type YouTubeState = {
  youTubeVideos: YouTubeVideos | [],
  status: string
}

export type ChangesState = {
  changes: Titles | [],
  status: string
}

export type ScheduleState = {
  schedule: Schedule | [],
  status: string
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
