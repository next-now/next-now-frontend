import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import Button from '../components/Button';
import TextField from '../components/Formik/TextField/TextField';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Register')}</h1>
      <p className="mb-4">{t('Enter your details to create an account.')}</p>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <form>
          <TextField name="name" label="Username" />
          <TextField name="email" label="Email" />
          <TextField name="username" label="Password" type="password" />
          <TextField name="password" label="Confirm Password" type="password" />
          <Button text="Submit" />
        </form>
      </Formik>
    </>
  );
};

export default LoginPage;
