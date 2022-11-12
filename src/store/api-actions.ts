import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { YouTubeVideos } from '../types/youtube';
import { APIRoute } from '../const';

export const fetchYouTubeVideos = createAsyncThunk<YouTubeVideos, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'mainData/loadYouTubeVideos',
  async (limit, {dispatch, extra: api}) => {
    const {data} = await api.get<YouTubeVideos>(`${APIRoute.YouTubeVideos}?limit=${limit}`);
    return data;
  }
);
