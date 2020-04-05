import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import Submit from '../../components/Submit';
import DropDown from '../../components/DropDown';
import TextField from '../../components/Formik/TextField/TextField';
import { navigate } from 'gatsby';
import { useState } from 'react';

interface Initiative {
  category: string;
  description: string;
}

const VoteInitiativePage: React.FC = () => {
  const { t } = useTranslation();

  const [initiative, setInitiative] = useState({category: '', description: ''});

  const onSubmit = (values: Initiative, actions: any) => {
    setInitiative(values)
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
      <h1 className="mb-8">{t('Vote for the initiative')}</h1>
      <p className="mb-4">
        {t(
          'Please vote for the initiative you decided to participate in.'
        )}
      </p>
      <Formik initialValues={{id: "1"}} onSubmit={onSubmit}>
        {() => (
        <Form>
          <Submit text="Vote for initiative" />
        </Form>)}
      </Formik>
    </>
  );
};

export default VoteInitiativePage;
