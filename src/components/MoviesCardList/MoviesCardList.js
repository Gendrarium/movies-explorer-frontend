import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  //Временная константа, пока не подключен бэкенд
  const movies = [{id: 1, nameRU: "33 слова о дизайне", duration: 62, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 2, nameRU: "33 слова о дизайне", duration: 75, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 3, nameRU: "33 слова о дизайне", duration: 62, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 4, nameRU: "33 слова о дизайне", duration: 75, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 5, nameRU: "33 слова о дизайне", duration: 62, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 6, nameRU: "33 слова о дизайне", duration: 75, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 7, nameRU: "33 слова о дизайне", duration: 62, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 8, nameRU: "33 слова о дизайне", duration: 75, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" }, {id: 9, nameRU: "33 слова о дизайне", duration: 75, image: "https://sun9-43.userapi.com/impg/PQsRz0fk4vklmfx-ULCZpF-31-GZozA-FLrIvw/r4CYfqvtR2E.jpg?size=364x203&quality=96&sign=4a7909e40dad213038f94b37029aada3&type=album" },]


  return (
    <section className="movies">
      <div className="movies__full-container">
        <div className="movies__grid-cards">
          {movies.map((movie)=> (
            <MoviesCard key={movie.id} movie={movie}/>
          ))}
        </div>
        <button className="movies__button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;