import React from 'react';
import TextField from './TextField';
import { Form, Formik, FormikErrors } from 'formik';
import { action } from '@storybook/addon-actions';
import * as Yup from 'yup';

export default {
  title: 'Components/Formik/TextField',
  component: TextField,
};

const submitHandler = (values: TestFormValues) => action('submit')(values);

type TestFormValues = {
  test: string;
};

export const Default: React.FC = () => {
  return (
    <Formik initialValues={{ test: '' }} onSubmit={submitHandler}>
      <Form>
        <TextField name="test" label="Test" />
      </Form>
    </Formik>
  );
};

export const Filled: React.FC = () => {
  return (
    <Formik initialValues={{ test: 'abc' }} onSubmit={submitHandler}>
      <Form>
        <TextField name="test" label="Test" />
      </Form>
    </Formik>
  );
};

export const Disabled: React.FC = () => {
  return (
    <Formik initialValues={{ test: '' }} onSubmit={submitHandler}>
      <Form>
        <TextField name="test" label="Test" disabled />
      </Form>
    </Formik>
  );
};

export const Validation: React.FC = () => {
  return (
    <Formik
      initialValues={{ test: '' }}
      onSubmit={submitHandler}
      validationSchema={Yup.object({
        a: Yup.string().required(),
        b: Yup.string().required(),
      })}
    >
      <Form>
        <TextField name="a" label="A" />
        <TextField name="b" label="B" />
      </Form>
    </Formik>
  );
};

export const Error: React.FC = () => {
  return (
    <Formik
      initialValues={{ test: '123456' }}
      onSubmit={submitHandler}
      validateOnMount={true}
      validationSchema={Yup.object({
        test: Yup.string()
          .max(5, 'Too long!')
          .min(2, 'Too Short!')
          .required('And its required!'),
      })}
      validate={values => {
        const errors: FormikErrors<TestFormValues> = {};
        if (values.test.length > 5) {
          errors.test = 'Too long!';
        }
        return errors;
      }}
    >
      <Form>
        <TextField name="test" label="Test" />
      </Form>
    </Formik>
  );
};

export const Resettable: React.FC = () => {
  return (
    <Formik initialValues={{ test: 'abc' }} onSubmit={submitHandler}>
      <Form>
        <TextField name="test" label="Test" resettable />
      </Form>
    </Formik>
  );
};

export const Magnifier: React.FC = () => {
  return (
    <Formik initialValues={{ test: '' }} onSubmit={submitHandler}>
      <Form>
        <TextField name="test" label="Test" icon="magnifier" />
      </Form>
    </Formik>
  );
};

export const Placeholder: React.FC = () => {
  return (
    <Formik initialValues={{ test: '' }} onSubmit={submitHandler}>
      <Form>
        <TextField name="test" label="Test" placeholder="Test value ..." />
      </Form>
    </Formik>
  );
};
