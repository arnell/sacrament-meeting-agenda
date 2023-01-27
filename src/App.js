import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import queryString from 'query-string';
import { addDays, format } from 'date-fns';

import './App.css';
import TextBox from './TextBox';
import HymnInput from './HymnInput';
import CallingsSectionV2 from './CallingsSection';
import ContentItemsSection from './ContentItemsSection';
import FormikInputField from './FormikInputField';
import Announcements from './Announcements';
import WardBusiness from './WardBusiness';

const StyledSubtext = styled.div`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const getNextSundayStr = () => {
  const today = new Date();
  const daysUntilSunday = (7 - today.getDay()) % 7;
  const sunday = addDays(today, daysUntilSunday);
  return format(sunday, 'LLLL d, yyyy');
};

const App = () => {
  const queryStringEntries = queryString.parse(window.location.search);
  const initialValues = { date: getNextSundayStr() };
  Object.entries(queryStringEntries).forEach(([k, v]) => {
    initialValues[k] = window.decodeURIComponent(v);
  });

  return (
    <Formik initialValues={initialValues}>
      {({ values }) => {
        const onPermalinkClick = () => {
          const urlQuery = Object.entries(values).reduce(
            (prev, current) =>
              `${prev}&${current[0]}=${window.encodeURIComponent(current[1])}`,
            ''
          );
          window.location = `?${urlQuery.substring(1)}`;
        };
        return (
          <div className="container">
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
              <TextBox
                label="Organist"
                className="col-sm-6"
                fieldName="organist"
              />
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
            <CallingsSectionV2 />
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
                  Thank holders of the Aaronic Priesthood for the administration
                  of the sacrament.
                </StyledSubtext>
              </div>
            </div>
            <ContentItemsSection />
            <div className="row">
              <TextBox
                label="Announcement"
                className="col-sm-12"
                fieldName="finalAnnouncement"
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
            <div className="row no-print">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={onPermalinkClick}
              >
                Permalink
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default App;
