import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const FormikInputField = ({
  type = 'text',
  id,
  name,
  className,
  onInput,
  style,
}) => (
  <Field
    as="input"
    type={type}
    id={id}
    name={name}
    className={className}
    onInput={onInput}
    style={style}
  />
);

FormikInputField.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onInput: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default FormikInputField;
