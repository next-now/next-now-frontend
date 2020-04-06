import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
    if (typeof localStorage === 'undefined') {
        return(<br/>);
    }
  const isLoggedIn = () => localStorage.getItem('token') !== null;
  return (
    <>
      <h1 className="mb-8">{t('Welcome')}</h1>
      <p>{t('Collaborate and level-up.')}</p>
      <p>
          {
              !isLoggedIn() ? <Button text="Login" path="/login"/> : null
          }
          {
              isLoggedIn() ? <Button text="Logout" path="/" onClickHandler={() => localStorage.clear()} /> :  null

          }
          {
              !isLoggedIn() ? <Button text="Sign up" path="/sign-up" /> : null
          }
      </p>
    </>
  );
};

export default IndexPage;
