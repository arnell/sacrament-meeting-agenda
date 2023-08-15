import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TextArea from './TextArea';

const ContainerDiv = styled.div`
  display: flex;
`;

const StyledAsDiv = styled.div`
  margin: 0 5px;
`;

const StyledNameTextArea = styled(TextArea)`
  flex: 0.8;
`;

const StyledCallingTextArea = styled(TextArea)`
  flex: 1;
`;

const CallingInput = ({ className, fieldName }) => (
  <ContainerDiv className={`${className}`}>
    <StyledNameTextArea fieldName={`${fieldName}-name`} />
    <StyledAsDiv>as</StyledAsDiv>
    <StyledCallingTextArea fieldName={`${fieldName}-calling`} />
  </ContainerDiv>
);

CallingInput.propTypes = {
  className: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
};

export default CallingInput;
