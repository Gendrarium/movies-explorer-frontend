import './MoviesCard.css';

function MoviesCard({ movie }) {

  return (
    <article className="movie">
      <div className="movie__container">
        <div className="movie__text-container">
          <h2 className="movie__title">{movie.nameRU}</h2>
          <p className="movie__duration">{`${(movie.duration - movie.duration%60)/60}ч ${movie.duration%60}м`}</p>
        </div>
        <button className="movie__like-button movie__like-button_delete"/>
      </div>
      <img  className="movie__image" src={movie.image} alt={movie.nameRU}/>
    </article>
  );
}

export default MoviesCard;