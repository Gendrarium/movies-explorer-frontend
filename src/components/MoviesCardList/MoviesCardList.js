import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';


function MoviesCardList({
  fetchError,
  isPreloaderVisible,
  movies,
  isFirstSearch,
  location,
  savedMovies,
  setSavedMovies,
  movieLength,
  movieLengthAdd,
  isShortFilm,
}) {
  const [isMoviesEmpty, setIsMoviesEmpty] = React.useState(false);
  const [newMovies, setNewMovies] = React.useState([]);
  const [newMovieLength, setNewMovieLength] = React.useState(0);

  React.useEffect(() => {
    if (movies.length === 0 && isFirstSearch) {
      setIsMoviesEmpty(true);
    } else {
      setIsMoviesEmpty(false);
    }
  }, [movies, isFirstSearch, setIsMoviesEmpty]);

  React.useEffect(() => {
    setNewMovieLength(movieLength);
  }, [movieLength, setNewMovieLength]);

  React.useEffect(() => {
    setNewMovies(movies);
  }, [movies]);

  React.useEffect(() => {
    if (movies.length >= newMovieLength) {
      setNewMovies(movies.slice(0, newMovieLength));
    } else {
      setNewMovies(movies);
    }
  }, [movies, newMovieLength]);

  function handleClickAddButton() {
    setNewMovieLength(newMovieLength + movieLengthAdd);
  }

  return (
    <section className="movies">
      <div className="movies__full-container">
      <div className="movies__preloader">
        <Preloader isVisible={isPreloaderVisible}/>
        </div>
        { isMoviesEmpty ?
          <p className="movies__not-found">{fetchError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : 'Ничего не найдено'}</p> :
          <div className="movies__grid-cards">
              {newMovies.map((movie)=> (
              <MoviesCard key={movie.id} movie={movie} location={location} savedMovies={savedMovies} setSavedMovies={setSavedMovies} isShortFilm={isShortFilm}/>))}
          </div>
        }
        {movies.length > newMovieLength && <button className="movies__button" onClick={handleClickAddButton}>Ещё</button>}
      </div>
    </section>
  );
}

export default MoviesCardList;