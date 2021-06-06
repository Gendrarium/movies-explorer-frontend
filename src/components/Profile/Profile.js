import React from 'react';
import Helmet from 'react-helmet';
import { useFormWithValidation } from '../../hooks/useForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { editProfile } from '../../utils/MainApi';
import './Profile.css';

function Profile({ isAuthChecking, handleLogout, setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists}) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
  const [authError, setAuthError] = React.useState('');
  const [isRedact, setIsRedact] = React.useState(false);
  const currentUser = React.useContext(CurrentUserContext);

  function handlePreRedact(e) {
    e.preventDefault();

    setIsRedact(true);
    if (!values.name && !values.email) {
      resetForm(currentUser, {}, true);
    }
  }

  function handleRedact(e) {
    e.preventDefault();

    if (values.name === currentUser.name && values.email.toLowerCase() === currentUser.email) {
      setIsRedact(false);
      return;
    }
    editProfile({ email: values.email.toLowerCase(), name: values.name })
      .then((res) => {
        if (res) {
          setIsRedact(false);
          console.log(res);
        } else {
          throw new Error("Произошла ошибка");
        }
      })
      .catch((err) => {
        console.log(err);
        setAuthError(err.message);
      })
  }

  React.useEffect(() => {
    setIsHeaderColorBlack(true);
    setIsHeaderExsists(true);
    setIsFooterExsists(false);
  }, [isAuthChecking, setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists]);

  return (
    <>
    <Helmet>
      <title>Профиль</title>
    </Helmet>
      <section className="profile">
        <div className="profile__full-container">
          <h1 className="profile__title">Привет, {values.name || currentUser.name}</h1>
          <form className="profile__form">
            <div className="profile__container">
              <h2 className="profile__question">Имя</h2>
              { isRedact ?
              <input className={`profile__input ${errors.name && 'profile__input_error'}`} type="text" name="name" value={values.name} onChange={handleChange} pattern="([A-Za-zА-Яа-яЁё\-]+\s?)*"  maxLength="30" required/> :
              <p className="profile__answer">{values.name || currentUser.name}</p>}
            </div>
            <div className="profile__container">
              <h2 className="profile__question">E-mail</h2>
              {isRedact ?
              <input className={`profile__input ${errors.email && 'profile__input_error'}`} type="text" name="email" value={values.email} onChange={handleChange}  pattern="^([A-Za-z\d_\-]+\.)*[A-Za-z\d_\-]+@[A-Za-z\d_\-]+(\.[A-Za-z\d_\-]+)*\.[A-Za-z]{2,6}$" required/> :
              <p className="profile__answer">{values.email || currentUser.email}</p>}
            </div>
            <div className="profile__errors-container">
              {errors.name && <span className="profile__error">{`Имя: ${errors.name === "Введите данные в указанном формате." ? 'Это поле может содержать только буквы латиницы, кириллицы, пробел или дефис. Поле не должно содержать два пробела подряд.' : errors.name}`}</span>}
              {errors.email && <span className="profile__error">{`E-mail: ${errors.email === "Введите данные в указанном формате." ? 'Введите данные в формате example@email.com.' : errors.email}`}</span>}
              {authError && <span className="profile__error">{`Ошибка: ${authError}`}</span>}
            </div>
            <div className="profile__button-container">
              { isRedact ?
              <button className={`profile__button profile__button_type_redact ${!isValid ? 'profile__button_disabled' : ''}`} onClick={handleRedact} type="submit" disabled={!isValid}>Сохранить</button> :
              <button className="profile__button profile__button_type_redact" onClick={handlePreRedact} type="button">Редактировать</button>
              }
              <button className="profile__button profile__button_type_exit" onClick={handleLogout} type="button">Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;