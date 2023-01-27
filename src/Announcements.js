import React from 'react';
import PropTypes from 'prop-types';

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

const Announcements = () => (
  <>
    <div className="row">
      <div className="col-sm-12">Announcements:</div>
    </div>
    <EnumeratedSection
      sectionItem={SizedTextArea}
      addText="Add Announcement"
      fieldName="announcement"
    />
  </>
);

export default Announcements;
