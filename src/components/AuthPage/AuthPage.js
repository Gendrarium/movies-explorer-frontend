import logo from '../../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import './AuthPage.css';
import React from 'react';

function AuthPage({ loggedIn, values, errors, handleChange, isValid, title, isRegister, buttonTitle, handleSubmit, authError }) {
  const history = useHistory();

  React.useEffect(()=> {
    if (loggedIn) {
      history.push('/movies');
    }
  }, [loggedIn, history]);

  return (
    <section className="auth-page">
      <div className="auth-page__full-container">
        <Link className="auth-page__logo-link" to="/"><img className="auth-page__logo" src={logo} alt="Логотип"/></Link>
        <h1 className="auth-page__title">{title}</h1>
        <form className="auth-page__form" onSubmit={handleSubmit}>
          <div className="auth-page__input-container">
            {isRegister &&
            (<>
              <h2 className="auth-page__input-title">Имя</h2>
              <input className={`auth-page__input ${errors.name && 'auth-page__input_error'}`}  type="text" name="name" value={values.name || ''} onChange={handleChange} pattern="([A-Za-zА-Яа-яЁё\-]+\s?)*" maxLength="30" required/>
              <span className="auth-page__input-error">{errors.name === "Введите данные в указанном формате." ? 'Это поле может содержать только буквы латиницы, кириллицы, пробел или дефис. Поле не должно содержать два пробела подряд.' : errors.name}</span>
            </>)}
            <h2 className="auth-page__input-title">E-mail</h2>
            <input className={`auth-page__input ${errors.email && 'auth-page__input_error'}`}  type="text" name="email" value={values.email || ''} onChange={handleChange} pattern="^([A-Za-z\d_\-]+\.)*[A-Za-z\d_\-]+@[A-Za-z\d_\-]+(\.[A-Za-z\d_\-]+)*\.[A-Za-z]{2,6}$" required/>
            <span className="auth-page__input-error">{errors.email === "Введите данные в указанном формате." ? 'Введите данные в формате example@email.com.' : errors.email}</span>
            <h2 className="auth-page__input-title">Пароль</h2>
            <input className={`auth-page__input ${errors.password && 'auth-page__input_error'}`} type="password" name="password" value={values.password || ''} onChange={handleChange} required minLength="8"/>
            <span className="auth-page__input-error">{errors.password}</span>
          </div>
          <span className="auth-page__error">{authError}</span>
          <button className={`auth-page__button ${!isValid && 'auth-page_button_disabled'}`} disabled={!isValid}>{buttonTitle}</button>
        </form>
        {isRegister ?
        <p className="auth-page__link-text">Уже зарегистрированы?<Link className="auth-page__link" to="/signin">Войти</Link></p> :
        <p className="auth-page__link-text">Ещё не зарегистрированы?<Link className="auth-page__link" to="/signup">Регистрация</Link></p>
        }
      </div>
    </section>
  );
}

export default AuthPage;