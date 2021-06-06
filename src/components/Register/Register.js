import Helmet from 'react-helmet';
import AuthPage from '../AuthPage/AuthPage';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useForm';
import { register, authorize } from '../../utils/MainApi';

function Register({ loggedIn, setIsHeaderExsists, setIsFooterExsists, handleAppLogin }) {
  const [authError, setAuthError] = React.useState('');
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();
  const history = useHistory();

  function handleRegister(e) {
    e.preventDefault();

    register({email: values.email.toLowerCase(), password: values.password, name: values.name})
      .then((res) => {
        if (res.data) {
          authorize({email: values.email.toLowerCase(), password: values.password})
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
      <title>Регистрация</title>
    </Helmet>
      <AuthPage
        loggedIn={loggedIn}
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleRegister}
        authError={authError}
        isValid={isValid}
        title="Добро пожаловать!"
        isRegister={true}
        buttonTitle="Зарегистрироваться"
      />
    </>
  );
}

export default Register;