import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikProps } from 'formik';
import Submit from '../components/Submit';
import TextField from '../components/Formik/TextField/TextField';
import { navigate } from 'gatsby'

interface CreateInitiativeValues {
  category: string;
  description: string;
}

const CreateInitiativePage: React.FC = () => {
  const { t } = useTranslation();

  const onSubmit = (values, actions) => {
    setTimeout(() => {
      fetch(`http://localhost:3000/api/v0/initiatives`, { // TODO: extract host into an env var
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values), 
        redirect: 'follow', 
        referrerPolicy: 'no-referrer'
      }).then(response => response.json()).then(body => {
        navigate("/wallet");
      });
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <h1 className="mb-8">{t('Create an initiative')}</h1>
      <p className="mb-4">
        {t(
          'Choose a category and a description for your initiative.'
        )}
      </p>
      <Formik initialValues={{
        category: '',
        description: '',
      }} onSubmit={onSubmit}>
        {() => (
        <Form>
          <TextField name="category" label="Category" />
          <TextField name="description" label="Description" />
          <Submit text="Create initiative" />
        </Form>)}
      </Formik>
    </>
  );
};

export default CreateInitiativePage;
