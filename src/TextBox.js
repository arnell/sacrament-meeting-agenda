import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlexContainer from './FlexContainer';
import FlexInput from './FlexInput';

const StyledLabel = styled.div`
  padding: 2px 5px 0 0;
`;

const TextBox = ({ label, index, className, fieldName, removeButton }) => (
  <FlexContainer className={className}>
    {(label || index !== undefined) && (
      <StyledLabel>{label || `${index + 1}.`}</StyledLabel>
    )}
    <FlexInput name={fieldName} />
    {removeButton}
  </FlexContainer>
);

TextBox.propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  className: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

export default TextBox;
