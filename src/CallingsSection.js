import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CallingInput from './CallingInput';
import FlexContainer from './FlexContainer';
import EnumeratedSection from './EnumeratedSection';

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

const CallingRow = ({ fieldName, removeButton }) => (
  <>
    <div className="col-sm-6">
      <StyledCallingInput fieldName={`${fieldName}-release`} />
    </div>
    <div className="col-sm-6">
      <FlexContainer>
        <StyledCallingInput fieldName={`${fieldName}-call`} />
        {removeButton}
      </FlexContainer>
    </div>
  </>
);

CallingRow.propTypes = {
  fieldName: PropTypes.string.isRequired,
  removeButton: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};

const CallingsSection = () => (
  <>
    <div className="row">
      <div className="col-sm-6">We Have Released:</div>
      <div className="col-sm-6">
        We Have Called <StyledNote>(ask to stand)</StyledNote>:
      </div>
    </div>
    <EnumeratedSection
      sectionItem={CallingRow}
      fieldName="callings-section"
      addText="Add Calling"
      initialCount={1}
    />
    <div className="row">
      <StyledCallingVerbage className="col-sm-6">
        ...And propose that they be given a vote of thanks for their service.
        Those who wish to show their appreciation may do so by the uplifted
        hand.
      </StyledCallingVerbage>
      <StyledCallingVerbage className="col-sm-6">
        ...And we propose that they be sustained. Those in favor, manifest it.
        Any opposed, manifest it.
      </StyledCallingVerbage>
    </div>
  </>
);

export default CallingsSection;
