import { Switch, Route, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import { getMovies, checkToken, logout } from '../../utils/MainApi';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(false);
  const [isHeaderColorBlack, setIsHeaderColorBlack] = React.useState(false);
  const [movieLength, setMovieLength] = React.useState(0);
  const [movieLengthAdd, setMovieLengthAdd] = React.useState(0);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isHeaderExsists, setIsHeaderExsists] = React.useState(true);
  const [isFooterExsists, setIsFooterExsists] = React.useState(true);
  const [location, setLocation] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [isAuthChecking, setIsAuthChecking] = React.useState(true);
  const history = useHistory();

  window.addEventListener('resize', resize);

  function resize() {
    setTimeout(() => {
      handleSize();
    }, 1000)
  }

  function handleSize() {
    if (window.innerWidth >= 1280) {
      setMovieLength(12);
      setMovieLengthAdd(3);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      setMovieLength(8);
      setMovieLengthAdd(2);
    } else {
      setMovieLength(5);
      setMovieLengthAdd(2);
    }
  }

  function handleLogin(user) {
    setCurrentUser(user);
    setLoggedIn(true);
  }

  function handleLogout() {
    logout()
      .then((res) => {
        if (res.message) {
          setCurrentUser({});
          setLoggedIn(false);
          history.push('/');
        }
      })
      .catch((err) => console.log(err));
  }

  function handleFilterMovies(movies, isShortFilm, value) {
    const filteredMovies = movies.filter((item) => {
      savedMovies.forEach((i) => {
        if (i.movieId === item.id) {
          return item.isLiked = true;
        }
      })
      return item.nameRU.toLowerCase().indexOf(value.toLowerCase()) !== -1
    })
    if (isShortFilm && filteredMovies.length > 0) {
      return filteredMovies.filter((item) => item.duration < 40);
    }
    return filteredMovies;
  }

  React.useEffect(()=> {
    setIsHeaderExsists(false);
    setIsFooterExsists(false);
    setIsAuthChecking(true);
    checkToken()
      .then((res) => {
        if (res.email) {
          handleLogin(res);
        }
      })
      .finally(() => {
        setIsAuthChecking(false);
      })
  }, [])

  React.useEffect(() => {
    getMovies()
    .then((res) => {
      if (res) {
        setSavedMovies(res);
      }
    })
    .catch((err) => {
      setFetchError(true);
      console.log(err);
    })
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isHeaderExsists && <Header isColorBlack={isHeaderColorBlack} loggedIn={loggedIn}/>}
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Main
              isAuthChecking={isAuthChecking}
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </Route>
          <Route exact path="/signin">
            <Login
              loggedIn={loggedIn}
              handleAppLogin={handleLogin}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </Route>
          <Route exact path="/signup">
            <Register
              loggedIn={loggedIn}
              handleAppLogin={handleLogin}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            isChecking={isAuthChecking}
          >
            <Movies
              handleSize={handleSize}
              movieLength={movieLength}
              movieLengthAdd={movieLengthAdd}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              setLocation={setLocation}
              location={location}
              handleFilterMovies={handleFilterMovies}
              isAuthChecking={isAuthChecking}
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            isChecking={isAuthChecking}
          >
            <SavedMovies
              fetchError={fetchError}
              setFetchError={setFetchError}
              handleSize={handleSize}
              movieLength={movieLength}
              movieLengthAdd={movieLengthAdd}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
              setLocation={setLocation}
              location={location}
              isAuthChecking={isAuthChecking}
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
              handleFilterMovies={handleFilterMovies}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            isChecking={isAuthChecking}
          >
            <Profile
              isAuthChecking={isAuthChecking}
              handleLogout={handleLogout}
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
          <ProtectedRoute
            path="*"
            loggedIn={loggedIn}
            isChecking={isAuthChecking}
          >
            <PageNotFound
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
        </Switch>
      </main>
      {isFooterExsists && <Footer/>}
    </CurrentUserContext.Provider>
  );
}

export default App;
