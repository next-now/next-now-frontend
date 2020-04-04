import React from 'react';
import { Formik, useField } from 'formik';
import Element from './Element';
import classNames from 'classnames';

export default {
  title: 'Components/Formik/Element',
  component: Element,
};

const FakeInput: React.FC<{ name: string }> = ({ name }) => {
  const [field, meta] = useField<string>(name);
  return (
    <p
      className={classNames(
        'border-gray-400 bg-gray-100 border-dotted border-2 p-2 m-0',
        {
          'border-red-600': meta.error,
        }
      )}
      dangerouslySetInnerHTML={{ __html: field.value || '&nbsp;' }}
    />
  );
};

export const Default: React.FC = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Element name="test" label="This is the label">
        <FakeInput name="test" />
      </Element>
    </Formik>
  );
};

export const Filled: React.FC = () => {
  return (
    <Formik initialValues={{ test: 'Test value' }} onSubmit={() => {}}>
      <Element name="test" label="This is the label">
        <FakeInput name="test" />
      </Element>
    </Formik>
  );
};

export const Description: React.FC = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Element
        name="test"
        label="This is the label"
        description="This is a description"
      >
        <FakeInput name="test" />
      </Element>
    </Formik>
  );
};

export const HighlightDescription: React.FC = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Element
        name="test"
        label="This is the label"
        description="This is a description"
        descriptionHighlighted
      >
        <FakeInput name="test" />
      </Element>
    </Formik>
  );
};

export const Disabled: React.FC = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Element name="test" label="This is the label" disabled>
        <FakeInput name="test" />
      </Element>
    </Formik>
  );
};

export const Errors: React.FC = () => {
  return (
    <Formik
      initialValues={{}}
      onSubmit={() => {}}
      initialErrors={{
        test: 'This is an error.',
      }}
    >
      <Element name="test" label="This is the label">
        <FakeInput name="test" />
      </Element>
    </Formik>
  );
};

export const Multiple: React.FC = () => {
  return (
    <Formik
      initialValues={{ a: 'Value A' }}
      onSubmit={() => {}}
      initialErrors={{ c: 'Error on C' }}
    >
      <div>
        <Element name="a" label="Element A">
          <FakeInput name="a" />
        </Element>

        <Element name="b" label="Element B" description="This is element B">
          <FakeInput name="b" />
        </Element>

        <Element name="c" label="Element C" description="This is element C">
          <FakeInput name="c" />
        </Element>
      </div>
    </Formik>
  );
};
