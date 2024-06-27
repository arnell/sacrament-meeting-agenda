import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import queryString from 'query-string';

import './App.css';
import TextBox from './TextBox';
import TextArea from './TextArea';
import HymnInput from './HymnInput';
import CallingsSection from './CallingsSection';
import ContentItemsSection from './ContentItemsSection';
import FormikInputField from './FormikInputField';
import Announcements from './Announcements';
import WardBusiness from './WardBusiness';
import Toolbar from './Toolbar';
import Persister from './Persister';
import getInitialFields from './getInitialFields';

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

const StyledSubtext = styled.div`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const App = () => {
  const queryStringEntries = queryString.parse(window.location.search);
  const initialValues = { ...getInitialFields() };
  Object.entries(queryStringEntries).forEach(([k, v]) => {
    initialValues[k] = window.decodeURIComponent(v);
  });

  return (
    <Formik initialValues={initialValues}>
      <StyledContainer className="container">
        <Persister />
        <Toolbar />
        <div className="row">
          <div className="col-sm-6">
            <h4>Sacrament Meeting Agenda</h4>
          </div>
          <div className="col-sm-6">
            <div className="text-right">
              Date <FormikInputField type="text" name="date" />
            </div>
          </div>
        </div>
        <div className="row">
          <TextBox
            label="Presiding"
            className="col-sm-6"
            fieldName="presiding"
          />
          <TextBox
            label="Conducting"
            className="col-sm-6"
            fieldName="conducting"
          />
        </div>
        <div className="row">
          <TextBox
            label="Chorister"
            className="col-sm-6"
            fieldName="chorister"
          />
          <TextBox label="Organist" className="col-sm-6" fieldName="organist" />
        </div>
        <div className="row">
          <TextBox
            label="Excuse/Welcome (Stake/Other Visitors)"
            className="col-sm-12"
            fieldName="excuseWelcome"
          />
        </div>
        <Announcements />
        <div className="row">
          <HymnInput
            label="Opening Hymn"
            className="col-sm-12"
            fieldName="openingHymn"
          />
        </div>
        <div className="row">
          <TextBox
            label="Invocation"
            className="col-sm-12"
            fieldName="invocation"
          />
        </div>
        <CallingsSection />
        <WardBusiness />
        <div className="row">
          <HymnInput
            label="Sacrament Hymn"
            className="col-sm-12"
            fieldName="sacramentHymn"
          />
        </div>
        <div className="row">
          <div className="col-sm-12">Administration of the Sacrament</div>
          <div className="col-sm-12">
            <StyledSubtext>
              Thank holders of the Aaronic Priesthood for the administration of
              the sacrament.
            </StyledSubtext>
          </div>
        </div>
        <ContentItemsSection />
        <div className="row">
          <TextArea
            label="Announcement"
            fieldName="finalAnnouncement"
            className="col-sm-12"
          />
        </div>
        <div className="row">
          <HymnInput
            label="Closing Hymn"
            className="col-sm-12"
            fieldName="closingHymn"
          />
        </div>
        <div className="row">
          <TextBox
            label="Benediction"
            className="col-sm-12"
            fieldName="benediction"
          />
        </div>
      </StyledContainer>
    </Formik>
  );
};

export default App;
