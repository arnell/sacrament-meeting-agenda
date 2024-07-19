import React, { useEffect, useRef } from 'react';
import { Field, useField } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlexContainer from './FlexContainer';

const StyledLabel = styled.div`
  padding: 2px 5px 0 0;
`;

/* eslint-disable no-param-reassign */
const onChange = (node) => {
  node.style.height = '';
  node.style.height = `${node.scrollHeight + 2}px`;
};

const TextArea = ({ label, index, className, fieldName, removeButton }) => {
  const [field] = useField(fieldName);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      onChange(ref.current);
    }
  }, [field.value]);

  return (
    <FlexContainer className={className}>
      {(label || index !== undefined) && (
        <StyledLabel>{label || `${index + 1}.`}</StyledLabel>
      )}
      <Field
        as="textarea"
        name={fieldName}
        style={{ flex: 1, resize: 'none' }}
        rows="1"
        innerRef={ref}
      />
      {removeButton}
    </FlexContainer>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  className: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

export default TextArea;
