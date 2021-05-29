import Helmet from 'react-helmet';
import './Profile.css';
import React from 'react';

function Profile({ setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists}) {

  React.useEffect(() => {
    setIsHeaderColorBlack(true);
    setIsHeaderExsists(true);
    setIsFooterExsists(false);
  }, [setIsHeaderColorBlack, setIsHeaderExsists, setIsFooterExsists]);

  return (
    <>
    <Helmet>
      <title>Профиль</title>
    </Helmet>
      <section className="profile">
        <div className="profile__full-container">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <div className="profile__container">
            <h2 className="profile__question">Имя</h2>
            <p className="profile__answer">Виталий</p>
          </div>
          <div className="profile__container">
            <h2 className="profile__question">E-mail</h2>
            <p className="profile__answer">pochta@yandex.ru</p>
          </div>
          <div className="profile__button-container">
            <button className="profile__button profile__button_type_redact">Редактировать</button>
            <button className="profile__button profile__button_type_exit">Выйти из аккаунта</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;