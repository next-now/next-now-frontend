import * as React from 'react';
import DropDown from './index';

export default {
  title: 'Components/List',
  component: DropDown,
};

export const Filled = () => (
  <DropDown
    items={[
      { name: "Education" },
      { name: "Elderly care" },
      { name: "Covid" }
    ]}
  />
);

export const Empty = () => <DropDown items={[]} />;
