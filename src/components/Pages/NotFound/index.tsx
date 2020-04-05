import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../Button';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Page not found')}</h1>
      <p>{t('Return to our homepage.')}</p>
      <Button text="Back to home" path="/" />
    </>
  );
};

export default NotFound;
