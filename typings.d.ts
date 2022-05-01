// tmdb api
export interface Movie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  name: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: Date
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  iso_639_1: string
  name: string
}

//doubanReq

export interface doubanRes {
  data: Datum[]
  createdAt: number
  updatedAt: number
  id: string
  originalName: string
  imdbVotes: number
  imdbRating: string
  rottenRating?: string
  rottenVotes?: number
  year: string
  imdbId: string
  alias?: string
  doubanId: string
  type: Type
  doubanRating: string
  doubanVotes: number
  duration: number
  dateReleased: Date
}

export interface doubanMovie {
  createdAt: number
  updatedAt: number
  id: string
  poster: string
  name: string
  genre: string
  description: string
  language: string
  country: string
  lang: Lang
  shareImage?: string
  movie: string
}

export enum Lang {
  CN = 'Cn',
}
