import Helmet from 'react-helmet';
import { useHistory } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import { useFormWithValidation } from '../../hooks/useForm';
import { authorize } from '../../utils/MainApi';
import React from 'react';

function Login({ loggedIn, handleAppLogin, setIsHeaderExsists, setIsFooterExsists }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
  const [authError, setAuthError] = React.useState('');
  const history = useHistory();

  function handleAuth(e) {
    e.preventDefault();

    authorize({ email: values.email.toLowerCase(), password: values.password })
      .then((res) => {
        if (res.user) {
          resetForm();
          handleAppLogin(res.user);
          history.push('/movies');
        } else if (res.message) {
          throw new Error(res.message);
        } else {
          throw new Error('Произошла непредвиденная ошибка, попробуйте снова.');
        }
      })
      .catch((err) => {
        setAuthError(err.message);
      })
  }

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
        loggedIn={loggedIn}
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleAuth}
        authError={authError}
        isValid={isValid}
        title="Рады видеть!"
        buttonTitle="Войти"
      />
    </>
  );
}

export default Login;