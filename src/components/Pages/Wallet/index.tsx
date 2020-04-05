import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../Button';

const Index: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Wallet')}</h1>
      <p>{t('Collaborate and level-up.')}</p>
      <Button text="Transactions" path="/wallet/transactions" />
      <Button text="Create Initiative" path="/wallet/create-initiative" />
      <Button text="Vote Initiative" path="/wallet/vote-initiative" />
    </>
  );
};

export default Index;
