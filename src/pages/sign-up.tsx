import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikValues } from 'formik';
import Button from '../components/Button';
import TextField from '../components/Formik/TextField/TextField';
import { navigate } from 'gatsby';

interface SignupValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignupPage: React.FC = () => {
  const { t } = useTranslation();
  const onSubmit = (values: SignupValues, actions: FormikValues) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      return fetch(`https://backend.next-now.site/api/v0/users`, {
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
        .then(() => {
          return navigate('/');
        });
    }, 1000);
  };
  return (
    <>
      <h1 className="mb-8">{t('Register')}</h1>
      <p className="mb-4">{t('Enter your details to create an account.')}</p>
      <Formik initialValues={ {
          username: '',
          password: '',
          email: '',
          passwordConfirm: ''
        } } onSubmit={onSubmit}>
        <form>
          <TextField name="username" label="Username" />
          <TextField name="email" label="Email" />
          <TextField name="password" label="Password" type="password" />
          <TextField name="passwordConfirm" label="Confirm Password" type="password" />
          <Button text="Submit" />
        </form>
      </Formik>
    </>
  );
};

export default SignupPage;
