import React, { FC, useMemo } from 'react';
import './film-card.scss';
import { FilmCardProps } from './film-card.types';

export const FilmCard: FC<FilmCardProps> = ({
  image,
  genreIds,
  title,
  year,
  genres,
}) => {
  const filteredGenres = useMemo(
    () => genres.filter(({ id }) => genreIds.includes(id)),
    [genreIds],
  );

  return (
    <div className="filmCardWrapper">
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        alt={title}
        className="image"
      />
      <div className="contentWrapper">
        <div className="contentTop">
          <h4 className="title">{title}</h4>
          <p className="year">{year}</p>
        </div>
        <div className="genresWrapper">
          {filteredGenres.map((item, id, array) => (
            <p key={item.id} className="genre">
              {id !== array.length - 1 ? `${item.name}, ` : item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
