import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikProps } from 'formik';
import Button from '../components/Button';
import Submit from '../components/Submit';
import TextField from '../components/Formik/TextField/TextField';

interface LoginValues {
  username: string;
  password: string;
}

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
      <Formik initialValues={{
        username: '',
        password: '',
      }} onSubmit={onSubmit}>
        {(props: FormikProps<LoginValues>) => (
        <Form>
          <TextField name="username" label="Username" />
          <TextField name="password" label="Password" type="password" />
          <Button text="Forgot password?" />
          <Submit text="Login" />
        </Form>)}
      </Formik>
    </>
  );
};

export default LoginPage;
