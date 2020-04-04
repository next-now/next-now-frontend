import React from 'react';
import Element, { ElementProps } from './../Element/Element';
import { useField } from 'formik';
import classNames from 'classnames';

export interface TextFieldProps extends ElementProps {
  /**
   * Type of input text
   */
  type?: string;
  /**
   * Placeholder text to be displayed when empty.
   */
  placeholder?: string;
}

/**
 * Text field component. Allows to display icons on the left and and option
 * reset-button on the right.
 */
const TextField: React.FC<TextFieldProps> = props => {
  const [field, meta] = useField<string>({
    name: props.name,
    defaultValue: '',
  });

  return (
    <Element {...props}>
      <input
        title={props.label}
        id={props.name}
        disabled={props.disabled}
        placeholder={props.placeholder}
        type={props.type}
        {...field}
        className={classNames(
          'border border-gray-300 focus:border-dark-blue-400 rounded-sm',
          'w-full py-3 px-4 text-xs leading-loose',
          {
            'bg-gray-100 cursor-not-allowed placeholder-gray-300':
              props.disabled,
            'placeholder-gray-400': !props.disabled,
            'bg-red-100 border-red-600': !!meta.error && meta.touched,
          }
        )}
      />
    </Element>
  );
};

export default TextField;
