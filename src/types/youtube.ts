export type YouTubeVideo = {
  id: number,
  title: string,
  image: string,
  youtube_id: string,
  timestamp: number,
  views: number,
  comments: number
}

export type YouTubeVideos = YouTubeVideo[]
