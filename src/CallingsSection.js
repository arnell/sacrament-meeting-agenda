import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CallingInput from './CallingInput';
import EnumeratedSection from './EnumeratedSection';

const StyledCallingReleaseRow = styled.div`
  flex: 1;
  display: flex;
`;

const StyledCallingInput = styled(CallingInput)`
  flex: 1;
`;

const StyledCallingVerbage = styled.div`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const StyledNote = styled.span`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const CallingReleaseRow = ({ fieldName, removeButton }) => (
  <StyledCallingReleaseRow>
    <StyledCallingInput fieldName={`${fieldName}`} />
    {removeButton}
  </StyledCallingReleaseRow>
);

CallingReleaseRow.propTypes = {
  fieldName: PropTypes.string.isRequired,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

const CallingsSection = () => (
  <div className="row">
    <div className="col-sm-6">
      <div>We Have Released:</div>
      <EnumeratedSection
        sectionItem={CallingReleaseRow}
        fieldName="release-section"
        addText="Add Release"
        addButtonColClass={false}
        initialCount={1}
      />
      <div className="row">
        <StyledCallingVerbage>
          ...And propose that they be given a vote of thanks for their service.
          Those who wish to show their appreciation may do so by the uplifted
          hand.
        </StyledCallingVerbage>
      </div>
    </div>
    <div className="col-sm-6">
      <div>
        We Have Called <StyledNote>(ask to stand)</StyledNote>:
      </div>
      <EnumeratedSection
        sectionItem={CallingReleaseRow}
        fieldName="calling-section"
        addText="Add Calling"
        addButtonColClass={false}
        initialCount={1}
      />
      <div className="row">
        <StyledCallingVerbage>
          ...And we propose that they be sustained. Those in favor, manifest it.
          Any opposed, manifest it.
        </StyledCallingVerbage>
      </div>
    </div>
  </div>
);

export default CallingsSection;
