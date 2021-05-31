import Helmet from 'react-helmet';
import AuthPage from '../AuthPage/AuthPage';
import React from 'react';

function Register({ setIsHeaderExsists, setIsFooterExsists }) {

  React.useEffect(() => {
    setIsHeaderExsists(false);
    setIsFooterExsists(false);
  }, [setIsHeaderExsists, setIsFooterExsists]);

  return (
    <>
    <Helmet>
      <title>Регистрация</title>
    </Helmet>
      <AuthPage
        title="Добро пожаловать!"
        isRegister={true}
        buttonTitle="Зарегистрироваться"
      />
    </>
  );
}

export default Register;