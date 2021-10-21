import React, { useState } from 'react';
import { getFilms, getGenres } from '../../api';
import {
  FilmsResponse,
  GenresState,
  HandleSearchPropsType,
  SortList,
} from '../../types';

const useHomeData = () => {
  const [isFirstDicker, setIsFirstDicker] = useState(true);
  const [films, setFilms] = useState<FilmsResponse>();
  const [genres, setGenres] = useState<GenresState>([]);
  const [queryParams, setQueryParams] = useState<{
    [key: string]: string | number;
    page: number;
  }>({
    with_genres: '',
    sort_by: '',
    page: 1,
  });
  React.useEffect(() => {
    getFilms('', setFilms);
  }, []);

  React.useEffect(() => {
    getGenres('', setGenres);
  }, []);

  const handleSelectOption = (ids: number[]) => {
    const convertedIds = ids.join(',');
    getFilms(`&with_genres=${convertedIds}`, setFilms);
  };

  const handleSort = (sortValue: SortList) => {
    getFilms(`&sort_by=${sortValue}`, setFilms);
  };

  const handlePagination = (page: number) => {
    getFilms(`&page=${Math.ceil(page / 2)}`, setFilms);
  };

  const handleSearch = ({
    genresIds,
    sortValue,
    page,
    isFetch = true,
  }: HandleSearchPropsType) => {
    const i = page && (page % 2 === 0 || page - 1 === queryParams.page);
    setIsFirstDicker(!!i);

    const searchValues = {
      ...queryParams,
      with_genres: genresIds?.join(',') || queryParams.with_genres,
      sort_by: sortValue ?? queryParams.sort_by,
      page: Math.ceil((page ?? queryParams?.page) / 2),
    };

    setQueryParams(searchValues);

    const queryParamsString = Object.entries(searchValues).map((query) => {
      return `&${query[0]}=${query[1]}`;
    });

    if (isFetch) {
      getFilms(queryParamsString?.join(''), setFilms);
    }
  };

  return {
    films,
    setFilms,
    genres,
    setGenres,
    handleSelectOption,
    handleSort,
    handlePagination,
    handleSearch,
    isFirstDicker,
  };
};

export { useHomeData };
