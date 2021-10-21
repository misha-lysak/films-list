import { GenresState } from "../../types";

type FilmCardProps = {
  image: string;
  genreIds: number[];
  title: string;
  year: string;
  genres: GenresState;
};

export type { FilmCardProps };
