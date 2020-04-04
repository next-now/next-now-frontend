import * as React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * A simple button component.
 */
const Button: React.FC<{
  text: string;
}> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <button
      className="flex items-center px-3 py-2 m-3 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      type="button"
    >
      {t(text)}
    </button>
  );
};

export default Button;
