import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import Submit from '../components/Submit';
import DropDown from '../components/DropDown';
import TextField from '../components/Formik/TextField/TextField';
import { navigate } from 'gatsby';
import { useState } from 'react';

interface Initiative {
  category: string;
  description: string;
}

const CreateInitiativePage: React.FC = () => {
  const { t } = useTranslation();

  const [initiative, setInitiative] = useState({
    category: '',
    description: '',
  });

  const onSubmit = (values: Initiative, actions: any) => {
    setInitiative(values);
    setTimeout(() => {
      fetch(`https://backend.next-now.site/api/v0/initiatives`, {
        // TODO: extract host into an env var
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(values),
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })
        .then(response => response.json())
        .then(body => {
          navigate('/wallet');
        });
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <h1 className="mb-8">{t('Create an initiative')}</h1>
      <p className="mb-4">
        {t('Choose a category and a description for your initiative.')}
      </p>
      <label className="text-small font-bold block mb-1 text-gray-600">
        {t('Initiatives')}
      </label>
      <DropDown // Hard-coded for now
        items={[
          { name: t('Education') },
          { name: t('Elderly care') },
          { name: t('Covid') },
        ]}
        onSelect={name => {
          initiative.category = name;
        }}
      />
      <Formik initialValues={initiative} onSubmit={onSubmit}>
        {() => (
          <Form>
            <TextField name="description" label="Description" />
            <Submit text="Create initiative" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateInitiativePage;
