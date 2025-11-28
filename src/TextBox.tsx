import React from 'react';
import styled from 'styled-components';

import FlexContainer from './FlexContainer';
import FlexInput from './FlexInput';

const StyledLabel = styled.div`
  padding: 2px 5px 0 0;
`;

type TextBoxProps = {
  label?: string;
  index?: number;
  className?: string;
  fieldName: string;
  removeButton?: React.ReactElement;
};

const TextBox = ({
  label,
  index,
  className,
  fieldName,
  removeButton,
}: TextBoxProps) => (
  <FlexContainer className={className}>
    {label ? (
      <StyledLabel>{label}</StyledLabel>
    ) : index !== undefined ? (
      <StyledLabel>{`${index + 1}.`}</StyledLabel>
    ) : null}
    <FlexInput name={fieldName} />
    {removeButton}
  </FlexContainer>
);

export default TextBox;
