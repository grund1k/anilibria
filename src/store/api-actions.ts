import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { YouTubeVideos } from '../types/youtube';
import { APIRoute } from '../const';
import { Titles } from '../types/title';

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

export const fetchChanges = createAsyncThunk<Titles, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'mainData/changes',
  async (limit, {dispatch, extra: api}) => {
    const {data} = await api.get<Titles>(`${APIRoute.Changes}?limit=${limit}`);
    return data;
  }
);
