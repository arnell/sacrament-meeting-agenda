import React, { useEffect, useRef } from 'react';
import { Field, useField } from 'formik';
import styled from 'styled-components';

import FlexContainer from './FlexContainer';

const StyledLabel = styled.div`
  padding: 2px 5px 0 0;
`;

const onChange = (node: HTMLDivElement) => {
  node.style.height = '';
  node.style.height = `${node.scrollHeight + 2}px`;
};

type TextAreaProps = {
  label?: string;
  index?: number;
  className?: string;
  fieldName: string;
  removeButton?: React.ReactElement;
};

const TextArea = ({
  label,
  index,
  className,
  fieldName,
  removeButton,
}: TextAreaProps) => {
  const [field] = useField(fieldName);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      onChange(ref.current);
    }
  }, [field.value]);

  return (
    <FlexContainer className={className}>
      {label ? (
        <StyledLabel>{label}</StyledLabel>
      ) : index !== undefined ? (
        <StyledLabel>{`${index + 1}.`}</StyledLabel>
      ) : null}
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

export default TextArea;
