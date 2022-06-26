import { Genre } from 'src/app/pages/movies/movie/models';

export const numberToString = (
  genre_ids: Array<number>,
  genresList: Array<Genre>
): Array<string> => {
  const result: Array<string> = [];

  genre_ids.forEach((id: number) => {
    const genre = genresList.find((genre: Genre) => genre.id == id);
    if (genre) result.push(genre.name);
  });

  return result;
};
