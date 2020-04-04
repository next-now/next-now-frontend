import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import TextField from '../components/Formik/TextField/TextField';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Login')}</h1>
      <p>{t('Enter your username and password.')}</p>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <TextField name="username" label="Username" />
        <TextField name="password" label="Password" type="password" />
      </Formik>
    </>
  );
};

export default LoginPage;
