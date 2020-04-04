import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import Button from '../components/Button';
import Submit from '../components/Submit';
import TextField from '../components/Formik/TextField/TextField';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <h1 className="mb-8">{t('Login')}</h1>
      <p className="mb-4">
        {t(
          'Enter your username and password to gain access to the dashboard and your token data.'
        )}
      </p>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        <div>
          <TextField name="username" label="Username" />
          <TextField name="password" label="Password" type="password" />
          <Button text="Forgot password?" />
          <Submit text="Login" />
        </div>
      </Formik>
    </>
  );
};

export default LoginPage;
