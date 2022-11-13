export type Title = {
  id: number,
  code: string,
  names: Name,
  announce: string | null,
  status: Status,
  posters: Posters,
  updated: number,
  last_change: number,
  type: Type,
  genres: Genres,
  team: Team,
  season: Season,
  description: string,
  in_favorites: number,
  blocked: Blocked,
  player: Player,
  torrent: Torrents
}

export type Titles = Title[];

type Name = {
  ru: string,
  en: string,
  alternative: string | null
}

type Status = {
  string: string,
  code: number
}

type Posters = {
  small: Poster,
  medium: Poster,
  original: Poster
}

type Poster = {
  url: string,
  raw_base64_file: string | null
}

type Type = {
  full_string: string,
  code: number,
  string: string,
  series: number,
  length: number
}

type Genres = string[]

type Team = {
  voice: string[],
  translator: string[],
  editing: string[],
  decor: string[],
  timing: string[]
}

type Season = {
  string: string,
  code: number,
  year: number,
  week_day: number
}

type Blocked = {
  blocked: boolean,
  bakanim: boolean
}

type Player = {
  alternative_player: string,
  host: string,
  series: Series,
  playlist: {
    [key: number]: Episod
  },
  rutube_playlist: unknown
}

type Episod = {
  serie: number,
  created_timestamp: number,
  preview: null | string,
  skips: {
      opening: [],
      ending: []
  },
  hls: {
      [key: string]: string
  }
}

type Torrents = {
  series: Series,
  list: Torrent[]
}

type Series = {
  first: number,
  last: number,
  string: string
}

type Torrent = {
  torrent_id: number,
  series: Series,
  quality: Quality,
  leechers: number,
  seeders: number,
  downloads: number,
  total_size: number,
  url: string,
  uploaded_timestamp: number,
  hash: string,
  metadata: null | string,
  raw_base64_file: null | string

}

type Quality = {
  string: string,
  type: string,
  resolution: string,
  encoder: string,
  lq_audio: null | string
}
