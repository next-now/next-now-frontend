import * as React from 'react';
import navigate from '../../utils/navigate';

/**
 * A simple drop down list.
 */
const DropDown: React.FC<{
  /**
   * List items consisting of names.
   */
  items: {
    name: string;
  }[];
  onSelect: (name: string) => void;
}> = ({ items, onSelect }) =>
  items.length ? (
    <nav
      role="navigation"
      aria-labelledby="navigation"
      className="page-centered bg-nextnow-dark text-white py-2 sm:py-0"
    >
      <h2 id="navigation" className="sr-only">
        Main navigation
      </h2>
      <select
        className="sm:hidden block appearance-none w-full bg-nextnow-dark border-2 border-nextnow-yellow px-3 py-2"
        onChange={event => onSelect(event.target.value)}
      >
        {items.map(item => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </nav>
  ) : null;

export default DropDown;
