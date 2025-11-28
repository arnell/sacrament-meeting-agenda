import React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';

import FlexContainer from './FlexContainer';
import DropDown from './DropDown';
import TextArea from './TextArea';

const StyledLabel = styled.div`
  padding: 2px;
  margin-right: 2px;
`;

type ContentItemProps = {
  fieldName: string;
  removeButton?: React.ReactElement;
};

const ContentItem = ({ fieldName, removeButton }: ContentItemProps) => {
  const { values: formikValues, setFieldValue } =
    useFormikContext<Record<string, string>>();
  const options: Record<string, { id: string; label: string }> = {
    speaker: { id: 'speaker', label: 'Speaker' },
    musicalNumber: { id: 'musicalNumber', label: 'Musical Number' },
    intermediateHymn: { id: 'intermediateHymn', label: 'Intermediate Hymn' },
    testimonies: { id: 'testimonies', label: 'Testimonies' },
    custom: { id: 'custom', label: 'Custom...' },
  };
  const selected = formikValues[`${fieldName}-label`] || 'speaker';

  const onSelect = (value: string) => {
    let fieldValue;
    if (value === 'custom') {
      fieldValue = prompt('Enter a label for the item:');
    } else {
      fieldValue = value;
    }
    if (fieldValue) {
      setFieldValue(`${fieldName}-label`, fieldValue);
    }
  };

  return (
    <FlexContainer className="col-sm-12">
      <StyledLabel>{options[selected]?.label || selected}</StyledLabel>
      <DropDown onSelect={onSelect} options={Object.values(options)} />
      <TextArea fieldName={fieldName} className="flex-grow" />
      {removeButton}
    </FlexContainer>
  );
};

export default ContentItem;
