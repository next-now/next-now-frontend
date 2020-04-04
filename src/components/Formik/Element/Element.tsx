import React from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

export interface ElementProps {
  /**
   * The form elements name.
   */
  name: string;
  /**
   * The form elements label.
   */
  label: string;
  /**
   * A in-depth description of the form element.
   */
  description?: string;
  /**
   * Visually marks the form element as required.
   *
   * **Does not validate! Required validation has to be added to the Yup validation schema.**
   */
  required?: boolean;
  /**
   * Disable the element.
   */
  disabled?: boolean;
  /**
   * Visually hide the label.
   */
  labelHidden?: boolean;
  /**
   * Visually hide the description.
   */
  descriptionHidden?: boolean;
  /**
   * Highlight the description.
   *
   * Used for less obvious descriptions that should be read by the user.
   */
  descriptionHighlighted?: boolean;
}

/**
 * Base component for form elements, handling label, description and error
 * display.
 */
const Element: React.FC<ElementProps> = props => {
  const [, meta] = useField(props.name);

  return (
    <div
      className="mb-4 form-element"
      aria-describedby={props.description && `${props.name}-description`}
    >
      <label
        htmlFor={props.name}
        className={classNames('text-small font-bold block mb-3', {
          'sr-only': props.labelHidden,
          'text-gray-300': props.disabled,
          'text-gray-600': !props.disabled,
        })}
      >
        {props.label}
        {props.required ? <span aria-hidden="true">*</span> : null}
      </label>

      <div className="relative">{props.children}</div>

      {props.description && (
        <p
          id={`${props.name}-description`}
          className={classNames('text-xs mt-2 mb-0', {
            'sr-only': props.descriptionHidden,
            'text-gray-300': props.disabled,
            'text-gray-500': !props.disabled,
            'text-bright-blue-500': props.descriptionHighlighted,
          })}
        >
          {props.description}
        </p>
      )}

      {meta.touched && meta.error && (
        <p className="mb-0 text-xs text-red-600">{meta.error}</p>
      )}
    </div>
  );
};

export default Element;
