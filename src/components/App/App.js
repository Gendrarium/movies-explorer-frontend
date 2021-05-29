import { Switch, Route } from 'react-router-dom';
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
import React from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isHeaderColorBlack, setIsHeaderColorBlack] = React.useState(false);
  const [isHeaderExsists, setIsHeaderExsists] = React.useState(true);
  const [isFooterExsists, setIsFooterExsists] = React.useState(true);

  return (
    <>
      <Header isColorBlack={isHeaderColorBlack} isHeaderExsists={isHeaderExsists} loggedIn={loggedIn}/>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Main
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </Route>
          <Route exact path="/signin">
            <Login
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </Route>
          <Route exact path="/signup">
            <Register
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </Route>
          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
          >
            <Movies
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
          >
            <SavedMovies
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="/profile"
            loggedIn={loggedIn}
          >
            <Profile
              setIsHeaderColorBlack={setIsHeaderColorBlack}
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
          <ProtectedRoute
            exact path="*"
            loggedIn={loggedIn}
          >
            <PageNotFound
              setIsHeaderExsists={setIsHeaderExsists}
              setIsFooterExsists={setIsFooterExsists}
            />
          </ProtectedRoute>
        </Switch>
      </main>
      <Footer isFooterExsists={isFooterExsists}/>
    </>
  );
}

export default App;
