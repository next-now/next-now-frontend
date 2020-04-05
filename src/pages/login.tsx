import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikValues } from 'formik';
import Button from '../components/Button';
import Submit from '../components/Submit';
import TextField from '../components/Formik/TextField/TextField';
import { navigate } from 'gatsby';

interface LoginValues {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  const onSubmit = (values: LoginValues, actions: FormikValues) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      return fetch(`http://ec2-18-195-76-27.eu-central-1.compute.amazonaws.com:3000/api/v0/auth/login`, {
        // TODO: extract host into an env var
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })
        .then(response => response.json())
        .then(body => {
          localStorage.setItem('token', body.token.token);
          localStorage.setItem('user', JSON.stringify(body.data));
          return navigate('/wallet');
        });
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
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <TextField name="username" label="Username" />
            <TextField name="password" label="Password" type="password" />
            <Button text="Forgot password?" />
            <Submit text="Login" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
