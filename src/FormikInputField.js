import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const FormikInputField = ({ type, name, className, onChange }) => (
  <Field
    as="input"
    type={type}
    name={name}
    className={className}
    onChange={onChange}
  />
);

FormikInputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormikInputField;
