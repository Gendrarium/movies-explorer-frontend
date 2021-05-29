import Helmet from 'react-helmet';
import AuthPage from '../AuthPage/AuthPage';
import React from 'react';

function Login({ setIsHeaderExsists, setIsFooterExsists }) {

  React.useEffect(() => {
    setIsHeaderExsists(false);
    setIsFooterExsists(false);
  }, [setIsHeaderExsists, setIsFooterExsists]);

  return (
    <>
    <Helmet>
      <title>Авторизация</title>
    </Helmet>
      <AuthPage
        title="Рады видеть!"
        buttonTitle="Войти"
      />
    </>
  );
}

export default Login;