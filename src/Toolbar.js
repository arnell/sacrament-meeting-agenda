import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';

import ClearModal from './ClearModal';
import useLocalStorage from './useLocalStorage';

const UtilsDiv = styled.div`
  position: fixed;
  top: 60px;
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

const MenuButton = styled(StyledButton)`
  align-self: end;
  i {
    margin-right: unset;
  }
`;

const shouldDefaultToToolbarOpen = () => window.innerWidth > 1280;

const Toolbar = () => {
  const { values } = useFormikContext();
  const [showButtons, setShowButtons] = useState(shouldDefaultToToolbarOpen());
  const [sacAgendaVerbiage, setSacAgendaVerbiage] = useLocalStorage(
    'sac-agenda-verbiage',
    false
  );
  const onPermalinkClick = () => {
    const urlQuery = Object.entries(values).reduce(
      (prev, current) =>
        `${prev}&${current[0]}=${window.encodeURIComponent(current[1])}`,
      ''
    );
    window.location = `?${urlQuery.substring(1)}`;
    setShowButtons(shouldDefaultToToolbarOpen());
  };

  const onToggleVerbiageClick = () => {
    setSacAgendaVerbiage(!sacAgendaVerbiage);
    window.location.reload();
  };

  const onPrintClick = () => {
    window.print();
    setShowButtons(shouldDefaultToToolbarOpen());
  };

  const handleResizeWindowEvent = () => {
    setShowButtons(shouldDefaultToToolbarOpen());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeWindowEvent);
    return () => window.removeEventListener('resize', handleResizeWindowEvent);
  });

  return (
    <>
      <UtilsDiv className="no-print">
        <MenuButton
          className="btn btn-primary"
          onClick={() => {
            setShowButtons(!showButtons);
          }}
        >
          <i className="bi bi-list" />
        </MenuButton>
        {showButtons && (
          <>
            <StyledButton
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#clearSomeModal"
              onClick={() => setShowButtons(shouldDefaultToToolbarOpen())}
            >
              Clear Fields...
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
              onClick={onToggleVerbiageClick}
            >
              Toggle Verbiage
            </StyledButton>
            <StyledButton
              type="button"
              className="btn btn-primary"
              onClick={onPrintClick}
            >
              Print
            </StyledButton>
          </>
        )}
      </UtilsDiv>
      <ClearModal />
    </>
  );
};

export default Toolbar;
