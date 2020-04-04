import * as React from 'react';
import { useTranslation } from 'react-i18next';

const TransactionsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="mb-8">{t('Transactions')}</h1>
      <p>{t('List of all recent transactions.')}</p>
    </>
  );
};

export default TransactionsPage;
