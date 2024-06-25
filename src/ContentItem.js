import React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FlexContainer from './FlexContainer';
import FlexInput from './FlexInput';
import DropDown from './DropDown';

const StyledLabel = styled.div`
  padding: 2px;
  margin-right: 2px;
`;

const ContentItem = ({ fieldName, removeButton }) => {
  const { values: formikValues, setFieldValue } = useFormikContext();
  const options = {
    speaker: { id: 'speaker', label: 'Speaker' },
    musicalNumber: { id: 'musicalNumber', label: 'Musical Number' },
    intermediateHymn: { id: 'intermediateHymn', label: 'Intermediate Hymn' },
    testimonies: { id: 'testimonies', label: 'Testimonies' },
    custom: { id: 'custom', label: 'Custom...' },
  };
  const selected = formikValues[`${fieldName}-label`] || 'speaker';

  const onSelect = (value) => {
    let fieldValue;
    if (value === 'custom') {
      // eslint-disable-next-line no-alert
      const customLabel = prompt('Enter a label for the item:');
      fieldValue = customLabel;
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
      <FlexInput type="text" name={fieldName} />
      {removeButton}
    </FlexContainer>
  );
};

ContentItem.propTypes = {
  fieldName: PropTypes.string,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

export default ContentItem;
