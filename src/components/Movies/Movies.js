import Helmet from 'react-helmet';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useFormWithValidation } from '../../hooks/useForm';
import './Movies.css';
import React from 'react';
import { getMovies } from '../../utils/MoviesApi';

function Movies({
  handleSize,
  movieLength,
  movieLengthAdd,
  handleFilterMovies,
  isAuthChecking,
  setIsHeaderColorBlack,
  setIsHeaderExsists,
  setIsFooterExsists,
  location,
  setLocation,
  savedMovies,
  setSavedMovies,
}) {
  const [movies, setMovies] = React.useState([]);
  const [fetchError, setFetchError] = React.useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isFirstSearch, setIsFirstSearch] = React.useState(false);
  const [isShortFilm, setIsShortFilm] = React.useState(false);
  const { values, handleChange } = useFormWithValidation();

  function handleSetShortFilm() {
    setIsShortFilm(!isShortFilm);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    setIsFirstSearch(true);
    setFetchError(false);
    handleSize();

    setIsPreloaderVisible(true);
    if (!JSON.parse(localStorage.getItem('allMovies'))) {
      getMovies()
      .then((res) => {
        if (res) {
          localStorage.setItem('allMovies', JSON.stringify(res));
          setMovies(handleFilterMovies(res, isShortFilm, values.search));
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        setFetchError(true);
      })
      .finally(() => {
        setIsPreloaderVisible(false);
      })
    } else {
      setMovies(handleFilterMovies(JSON.parse(localStorage.getItem('allMovies')), isShortFilm, values.search));
      setIsPreloaderVisible(false);
    }
  }

  React.useEffect(() => {
    setIsHeaderColorBlack(true);
    setIsHeaderExsists(true);
    setIsFooterExsists(true);
    setLocation('/movies');
  }, [isAuthChecking, setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists, setLocation]);

  React.useEffect(() => {
    if (isFirstSearch) {
      localStorage.setItem('lastSearch', JSON.stringify(movies));
    }
  }, [movies, isFirstSearch]);

  React.useEffect(() => {
    const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
    if (lastSearch.length > 0) {
      const filteredMovies = lastSearch.filter((item) => {
        savedMovies.forEach((i) => {
          if (i.movieId === item.id) {
            return item.isLiked = true;
          }
        })
        return item;
      })
      setMovies(filteredMovies);
    }
  }, [savedMovies])

  return (
    <>
      <Helmet>
        <title>Фильмы</title>
      </Helmet>
      <SearchForm
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSearchSubmit}
        handleSetShortFilm={handleSetShortFilm}
      />
        <MoviesCardList
          fetchError={fetchError}
          movieLength={movieLength}
          movieLengthAdd={movieLengthAdd}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          isPreloaderVisible = {isPreloaderVisible}
          isFirstSearch={isFirstSearch}
          movies={movies}
          location={location}
        />
    </>
  );
}

export default Movies;