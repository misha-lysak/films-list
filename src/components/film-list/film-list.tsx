import React, { FC } from 'react';
import { FilmCard } from '../film-card';
import './film-list.scss';
import { FilmListProps } from './film-list.types';

const FilmList: FC<FilmListProps> = ({ filmList, genres }) => {
  return (
    <div className="filmListWrapper">
      {filmList?.[0] ? (
        filmList?.map((film) => (
          <FilmCard
            key={film.id}
            image={film.poster_path}
            genreIds={film.genre_ids}
            title={film.title}
            year={film.release_date}
            genres={genres}
          />
        ))
      ) : (
        <div className='noResults'>Can't find some films with this genres</div>
      )}
    </div>
  );
};

export { FilmList };
