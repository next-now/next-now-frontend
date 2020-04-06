import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';

/**
 * A simple button component.
 */
const Button: React.FC<{
  text: string;
  path?: string;
  onClickHandler?: ()=> any;
}> = ({ text, path, onClickHandler }) => {
  const { t } = useTranslation();
  return (
    <button
      className="flex items-center px-3 py-2 m-3 border rounded text-teal-200 border-teal-400 hover:bg-nextnow-dark hover:text-white hover:border-white"
      type="button"
      onClick={ onClickHandler? onClickHandler : (() => ({}))}
    >
      {path ? <Link to={path}>{t(text)}</Link> : t(text)}
    </button>
  );
};

export default Button;
