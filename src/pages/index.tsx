import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Welcome')}</h1>
      <p>{t('Collaborate and level-up.')}</p>
      <p>
        <Button text="Login" path="/login" />
        <Button text="Sign up" path="/sign-up" />
      </p>
    </>
  );
};

export default IndexPage;
