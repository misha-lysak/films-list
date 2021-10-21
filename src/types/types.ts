import { SortList } from './enums';

type FilmsResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
};

type GenresState = {
  id: number;
  name: string;
}[];

type FilmState = FilmsResponse['results'];

/* eslint-disable */
type HandleSearchType = (a: {
  genresIds?: HandleSearchPropsType['genresIds'];
  sortValue?: HandleSearchPropsType['sortValue'];
  page?: HandleSearchPropsType['page'];
  isFetch?: boolean
}) => void;

type HandleSearchPropsType = {
  genresIds?: number[];
  sortValue?: SortList;
  page?: number;
  isFetch?: boolean
};

export type {
  HandleSearchPropsType,
  FilmsResponse,
  FilmState,
  GenresState,
  HandleSearchType,
};
