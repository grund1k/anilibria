export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
  Schedule = '/schedule',
  Team = '/team',
  Donate = '/donate'
}

export enum APIRoute {
  YouTubeVideos = '/getYouTube',
  Changes = '/getChanges',
  Schedule = '/getSchedule',
}

export enum NameSpace {
  YouTube = 'YouTube',
  Changes = 'Changes',
  Schedule = 'Schedule'
}

export enum FetchStatus {
  Idle = 'idle',
  Rejected = 'rejected',
  Success = 'success',
  Pending = 'pending'
}

export const YOUTUBE_LINK = 'https://youtu.be/';
export const BACKEND_URL = 'https://api.anilibria.tv/v2';
export const POSTERS_URL = 'https://static-libria.weekstorm.one';
