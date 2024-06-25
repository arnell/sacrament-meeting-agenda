import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EnumeratedSection from './EnumeratedSection';
import TextArea from './TextArea';

const SizedTextArea = ({ index, fieldName, removeButton }) => (
  <div className="col-sm-12">
    <TextArea index={index} fieldName={fieldName} removeButton={removeButton} />
  </div>
);

SizedTextArea.propTypes = {
  index: PropTypes.number,
  fieldName: PropTypes.string,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

const StyleWardBusinessItems = styled.span`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const WardBusiness = () => (
  <>
    <div className="row">
      <div className="col-sm-12">
        Ward / Stake Business:{' '}
        <StyleWardBusinessItems>
          (Ordinations, Advancements, Memberships, Confirmations, Blessings)
        </StyleWardBusinessItems>
      </div>
    </div>
    <EnumeratedSection
      sectionItem={SizedTextArea}
      addText="Add Item"
      fieldName="ward-business"
    />
  </>
);

export default WardBusiness;
