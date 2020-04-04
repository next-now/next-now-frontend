import * as React from 'react';

/**
 * A simple submit component.
 */
const Submit: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <button
      className="flex items-center px-3 py-2 m-3 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white bg-nextnow-dark"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Submit;
