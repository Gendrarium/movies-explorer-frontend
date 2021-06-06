import { likeMovie, dislikeMovie } from '../../utils/MainApi';
import './MoviesCard.css';

function MoviesCard({ movie, location, setSavedMovies, savedMovies, isShortFilm }) {

  function handleCardClick (e) {
    if (e.target.className.indexOf('movie__like-button') >= 0) {
      return;
    }
    window.open(location === '/movies' ? movie.trailerLink : movie.trailer, '_blank');
  }

  function handleLike(e) {
    if (e.target.className.indexOf('movie__like-button_active') >= 0) {
      handleDislike(e);
    } else {
      likeMovie(movie)
        .then((res) => {
          if (res.nameRU) {
            savedMovies.push(res)
            setSavedMovies(savedMovies);
            e.target.classList.add('movie__like-button_active');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  function handleDislike(e) {
    if (e.target.className.indexOf('movie__like-button_active') >= 0) {
        const deleteMovie = savedMovies.filter((item) => item.nameRU === movie.nameRU);
        dislikeMovie(deleteMovie[0].movieId)
          .then((res) => {
            setSavedMovies(savedMovies.filter((item) => item.movieId !== res.movieId));
            e.target.classList.remove('movie__like-button_active');
          })
          .catch((err) => {
            console.log(err);
          })

    } else {
      dislikeMovie(movie.movieId)
        .then((res) => {
          if (res) {
            if (isShortFilm) {
              const newSavedMovies = savedMovies.filter((item) => item.movieId !== res.movieId);
              setSavedMovies(newSavedMovies.filter((item) => item.duration < 40))
            } else {
              setSavedMovies(savedMovies.filter((item) => item.movieId !== res.movieId));
            }
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }
  }

  return (
    <article className="movie" onClick={handleCardClick}>
      <div className="movie__container">
        <div className="movie__text-container">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__duration">{`${(movie.duration - movie.duration%60)/60}ч ${movie.duration%60}м`}</p>
        </div>
        <button className={`movie__like-button ${location === '/saved-movies' ? 'movie__like-button_delete' : ''} ${movie.isLiked ? 'movie__like-button_active' : ''}`} onClick={location === '/movies' ? handleLike : handleDislike}/>
      </div>
      {movie.image === null || movie.image === 'https://api.nomoreparties.co' ?
      <p className="movie__not-found-image">Картинка отсутствует</p>  :
      <img  className="movie__image" src={location === '/movies' ?  `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt={movie.nameRU}/>
      }
    </article>
  );
}

export default MoviesCard;