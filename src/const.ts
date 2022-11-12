export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
  Schedule = '/schedule',
  Team = '/team',
  Donate = '/donate'
}

export enum APIRoute {
  YouTubeVideos = 'getYouTube'
}

export enum NameSpace {
  YouTube = 'YouTube',
}

export enum FetchStatus {
  Idle = 'idle',
  Rejected = 'rejected',
  Success = 'success',
  Pending = 'pending'
}

export const YOUTUBE_LINK = 'https://www.youtube.com/watch?v=';
