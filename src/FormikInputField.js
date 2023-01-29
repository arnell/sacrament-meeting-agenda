import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const FormikInputField = ({ type, name, className, onInput }) => (
  <Field
    as="input"
    type={type}
    name={name}
    className={className}
    onInput={onInput}
  />
);

FormikInputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onInput: PropTypes.func,
};

export default FormikInputField;
