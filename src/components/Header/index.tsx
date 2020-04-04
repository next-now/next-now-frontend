import * as React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

/**
 * A simple header component, displaying the page title and the language switcher.
 */
const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="page-centered font-black bg-nextnow-yellow text-nextnow-dark">
      <div className=" sm:flex sm:justify-between py-3">
        <header className="text-2xl">
          {t('Next Now: Life-long solidarity')}
        </header>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Header;
