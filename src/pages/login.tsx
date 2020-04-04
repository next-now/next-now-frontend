import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import TextField from '../components/Formik/TextField/TextField';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Login')}</h1>
      <p className="mb-4">
        {t(
          'Enter your username and password to gain access to the dashboard and your token data.'
        )}
      </p>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <form>
          <TextField name="username" label="Username" />
          <TextField name="password" label="Password" type="password" />
        </form>
      </Formik>
    </>
  );
};

export default LoginPage;
