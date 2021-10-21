import { FilmsResponse, GenresState } from "../../types";

type FilmListProps = {
  filmList?: FilmsResponse['results'];
  genres: GenresState;
};

export type { FilmListProps };
