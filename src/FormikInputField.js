import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const FormikInputField = ({ type, name, className }) => (
  <Field as="input" type={type} name={name} className={className} />
);

FormikInputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FormikInputField;
