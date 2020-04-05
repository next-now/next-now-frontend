import * as React from 'react';
import { useTranslation } from 'react-i18next';

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  const markup = {
    __html: 'Example<pre>pre</pre> and <strong>bold</strong>',
  };

  return (
    <>
      <h1 className="mb-8">{t('Dashboard')}</h1>
      <div dangerouslySetInnerHTML={markup}></div>
    </>
  );
};

export default IndexPage;
