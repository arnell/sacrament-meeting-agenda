import React from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';

import getInitialFields from './getInitialFields';
import ClearModal from './ClearModal';

const UtilsDiv = styled.div`
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  button {
    margin-bottom: 5px;
    margin-right: 10px;
  }
  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: white;
  }
  i {
    margin-right: 5px;
  }
`;

const StyledButton = styled.button`
  box-shadow: 2px 5px 8px -4px black;
`;

const onPrintClick = () => {
  window.print();
};

const Toolbar = () => {
  const { values, resetForm } = useFormikContext();
  const onPermalinkClick = () => {
    const urlQuery = Object.entries(values).reduce(
      (prev, current) =>
        `${prev}&${current[0]}=${window.encodeURIComponent(current[1])}`,
      ''
    );
    window.location = `?${urlQuery.substring(1)}`;
  };

  return (
    <>
      <UtilsDiv className="no-print">
        <StyledButton
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const newValues = { ...values };

            Object.keys(newValues).forEach((key) => {
              if (key.indexOf('-count') === -1) {
                newValues[key] = '';
              }
            });
            resetForm({ values: { ...newValues, ...getInitialFields() } });
          }}
        >
          Clear All
        </StyledButton>
        <StyledButton
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#clearSomeModal"
        >
          Clear Some...
        </StyledButton>
        <StyledButton
          type="button"
          className="btn btn-primary d-none"
          onClick={onPermalinkClick}
        >
          Permalink
        </StyledButton>
        <StyledButton
          type="button"
          className="btn btn-primary"
          onClick={onPrintClick}
        >
          Print
        </StyledButton>
      </UtilsDiv>
      <ClearModal />
    </>
  );
};

export default Toolbar;
