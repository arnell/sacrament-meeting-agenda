import { Field } from 'formik';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlexContainer from './FlexContainer';

const StyledLabel = styled.div`
  padding: 2px 5px 0 0;
`;

const onInput = (e) => {
  e.target.style.height = '';
  e.target.style.height = `${e.target.scrollHeight + 2}px`;
};

const TextArea = ({ label, index, className, fieldName, removeButton }) => {
  const textAreaRef = useCallback((node) => {
    if (node !== null) {
      onInput({ target: node });
    }
  }, []);

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
        innerRef={textAreaRef}
        onInput={onInput}
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
