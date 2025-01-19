import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import queryString from 'query-string';

import './App.css';
import getInitialFields from './getInitialFields';
import VerbiageOutline from './VerbiageOutline';
import SlimOutline from './SlimOutline';
import useLocalStorage from './useLocalStorage';
import Persister from './Persister';
import Toolbar from './Toolbar';

const StyledContainer = styled.div`
  box-shadow: 3px 5px 8px 1px;
  padding: 20px 0;
  background-color: white;

  @media (min-width: 1200px) {
    max-width: 960px;
  }

  @media (min-width: 576px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media print {
    padding: 0;
  }
`;

const App = () => {
  const queryStringEntries = queryString.parse(window.location.search);
  const initialValues = { ...getInitialFields() };
  Object.entries(queryStringEntries).forEach(([k, v]) => {
    initialValues[k] = window.decodeURIComponent(v);
  });
  const [sacAgendaVerbiage] = useLocalStorage('sac-agenda-verbiage', false);

  return (
    <Formik initialValues={initialValues}>
      <StyledContainer className="container">
        <Persister />
        <Toolbar />
        {sacAgendaVerbiage ? <VerbiageOutline /> : <SlimOutline />}
      </StyledContainer>
    </Formik>
  );
};

export default App;
