import React from 'react';
import PropTypes from 'prop-types';

import EnumeratedSection from './EnumeratedSection';
import FlexTextBox from './FlexTextBox';

const SizedFlexTextBox = ({ index, fieldName, removeButton }) => (
  <div className="col-sm-12">
    <FlexTextBox
      index={index}
      fieldName={fieldName}
      removeButton={removeButton}
    />
  </div>
);

SizedFlexTextBox.propTypes = {
  index: PropTypes.number,
  fieldName: PropTypes.string,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

const WardBusiness = () => (
  <>
    <div className="row">
      <div className="col-sm-12">
        Stake Business --- Ordinations --- Advancements --- Memberships ---
        Confirmations --- Blessings
      </div>
    </div>
    <EnumeratedSection
      sectionItem={SizedFlexTextBox}
      addText="Add Item"
      fieldName="ward-business"
    />
  </>
);

export default WardBusiness;
