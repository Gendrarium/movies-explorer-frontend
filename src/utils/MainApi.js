const BASE_URL = 'http://localhost:8000';

export const register = ({ password, email, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email, name })
  })
    .then((res => res.json()))
    .catch((err) => console.log(err));
};

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((res => res.json()))
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
}

export const logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Произошла ошибка")
      }
    }))
    .catch(err => console.log(err))
};

export const editProfile = ({ email, name }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, name })
  })
    .then((res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Произошла ошибка")
      }
    }))
    .catch(err => console.log(err))
};

export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const likeMovie = ({
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  id,
}) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: country === null ? 'Отсутствует' : country,
      director: director === null ? 'Отсутствует' : director,
      duration,
      year,
      description,
      image: image === null ? 'https://api.nomoreparties.co' : `https://api.nomoreparties.co${image.url}`,
      trailer: trailerLink.indexOf('http') === -1 ? 'https://www.youtube.com/' : trailerLink,
      nameRU,
      nameEN,
      thumbnail: image === null ? 'https://api.nomoreparties.co' : `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      movieId: id,
    })
  })
    .then((res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Произошла ошибка");
      }
    }))
    .catch(err => console.log(err))
};

export const dislikeMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Произошла ошибка");
      }
    }))
    .catch(err => console.log(err))
};



