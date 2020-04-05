import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import Submit from '../../components/Submit';
import { navigate } from 'gatsby';
import { useState } from 'react';

interface Initiative {
  id: number;
  category: string;
  description: string;
}

const VoteInitiativePage: React.FC = () => {
  const { t } = useTranslation();
  if (typeof window === 'undefined') {
    return <></>;
  }

  const pathNumber = window.location.pathname.split('/').pop();
  const initiativeId: number = Number(pathNumber);
  const [initiative, setInitiative] = useState({
    id: initiativeId,
    category: '',
    description: '',
  });

  fetchInitiative(initiativeId, (initiative: Initiative) => {
    initiative.category = initiative.category;
    initiative.description = initiative.description;
    console.log(initiative);
  });

  const onSubmit = (values: Initiative, actions: any) => {
    setTimeout(() => {
      fetch(`http://localhost:3000/api/v0/vote/${values.id}`, {
        // TODO: extract host into an env var
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
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
      <h1 className="mb-8">{t('Vote for the initiative')}</h1>
      <p className="mb-4">
        {t('Please vote for the initiative you decided to participate in.')}
      </p>
      <Formik initialValues={initiative} onSubmit={onSubmit}>
        {() => (
          <Form>
            <Submit text="Vote for initiative" />
          </Form>
        )}
      </Formik>
    </>
  );
};

const fetchInitiative = (
  id: number,
  callback: (response: Initiative) => void
) => {
  setTimeout(() => {
    fetch(`http://localhost:3000/api/v0/initiative/${id}`, {
      // TODO: extract host into an env var
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    })
      .then(response => response.json())
      .then(body => {
        callback(body);
      });
  }, 1000);
};

export default VoteInitiativePage;
