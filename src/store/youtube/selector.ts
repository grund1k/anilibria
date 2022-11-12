import { NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { State } from '../../types/store';
import { YouTubeVideos } from '../../types/youtube';

export const getYouTubeVideos = (state: State): YouTubeVideos => state[NameSpace.YouTube].youTubeVideos;
export const getYouTubeVideosStatus = (state: State): string => state[NameSpace.YouTube].status;

export const useGetYouTubeVideos = () => useAppSelector(getYouTubeVideos);
export const useGetYouTubeVideosStatus = () => useAppSelector(getYouTubeVideosStatus);
