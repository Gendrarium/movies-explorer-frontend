import Helmet from 'react-helmet';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useFormWithValidation } from '../../hooks/useForm';
import React from 'react';

function SavedMovies({
  handleSize,
  savedMovies,
  setSavedMovies,
  handleFilterMovies,
  isAuthChecking,
  setIsHeaderColorBlack,
  setIsHeaderExsists,
  setIsFooterExsists,
  location,
  setLocation,
  movieLength,
  movieLengthAdd,
  fetchError,
  setFetchError,
}) {
  const [movies, setMovies] = React.useState([]);
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isFirstSearch, setIsFirstSearch] = React.useState(false);
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const { values, handleChange } = useFormWithValidation();

  function handleSearchSubmit(e) {
    e.preventDefault();

    setFetchError(false);
    setIsFirstSearch(true);

    setIsPreloaderVisible(true);
    setMovies(handleFilterMovies(savedMovies, isShortFilm, values.search));
    setIsPreloaderVisible(false);
  }

  function handleSetShortFilm() {
    setIsShortFilm(!isShortFilm);
  }

  React.useEffect(() => {
    setIsPreloaderVisible(true);
    setMovies(savedMovies);
    setIsPreloaderVisible(false);
    handleSize();
  }, [savedMovies, handleSize])

  React.useEffect(() => {
    setIsHeaderColorBlack(true);
    setIsHeaderExsists(true);
    setIsFooterExsists(true);
    setLocation('/saved-movies');
  }, [isAuthChecking, setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists, setLocation]);

  return (
    <>
      <Helmet>
        <title>Сохранённые фильмы</title>
      </Helmet>
      <SearchForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSearchSubmit}
        handleSetShortFilm={handleSetShortFilm}
        />
      <MoviesCardList
        isShortFilm={isShortFilm}
        fetchError={fetchError}
        movieLength={movieLength}
        movieLengthAdd={movieLengthAdd}
        location={location}
        setSavedMovies={setSavedMovies}
        savedMovies={savedMovies}
        movies={movies}
        isFirstSearch={isFirstSearch}
        isPreloaderVisible={isPreloaderVisible}
      />
    </>
  );
}

export default SavedMovies;