import React from 'react';
import styled from 'styled-components';
import FormikInputField from './FormikInputField';
import TextBox from './TextBox';
import Announcements from './Announcements';
import HymnInput from './HymnInput';
import CallingsSection from './CallingsSection';
import WardBusiness from './WardBusiness';
import ContentItemsSection from './ContentItemsSection';
import TextArea from './TextArea';

const StyledSubtext = styled.div`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const SlimOutline = () => (
  <>
    <div className="row">
      <div className="col-sm-6">
        <h4>Sacrament Meeting Agenda</h4>
      </div>
      <div className="col-sm-6">
        <div className="text-right">
          Date <FormikInputField name="date" />
        </div>
      </div>
    </div>
    <div className="row">
      <TextBox label="Presiding" className="col-sm-6" fieldName="presiding" />
      <TextBox label="Conducting" className="col-sm-6" fieldName="conducting" />
    </div>
    <div className="row">
      <TextBox label="Chorister" className="col-sm-6" fieldName="chorister" />
      <TextBox label="Organist" className="col-sm-6" fieldName="organist" />
    </div>
    <div className="row">
      <TextArea
        label="Welcome (Stake/Other Visitors)"
        className="col-sm-12"
        fieldName="welcome"
      />
    </div>
    <div className="row">
      <TextArea label="Excuse" className="col-sm-12" fieldName="excuse" />
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
          Thank holders of the Aaronic Priesthood for the administration of the
          sacrament.
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
  </>
);

export default SlimOutline;
