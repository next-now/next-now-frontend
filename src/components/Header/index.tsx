import * as React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * A simple header component, displaying the page title and the language switcher.
 */
const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="page-centered font-black bg-nextnow-dark text-nextnow-blue-jelly">
      <div className=" sm:flex sm:justify-between py-3">
        <header className="text-2xl">
          {t('Next Now: Life-long solidarity')}
        </header>
      </div>
    </div>
  );
};

export default Header;
