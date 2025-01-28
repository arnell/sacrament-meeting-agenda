import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormikInputField from './FormikInputField';
import TextBox from './TextBox';
import Announcements from './Announcements';
import HymnInput from './HymnInput';
import CallingsSection from './CallingsSection';
import WardBusiness from './WardBusiness';
import ContentItemsSection from './ContentItemsSection';
import TextArea from './TextArea';

const VerbiageText = styled.div`
  font-weight: normal;
`;

const StyledSubtext = styled.div`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const VerbiageRow = ({ children }) => (
  <div className="row">
    <VerbiageText className="col-sm-12">{children}</VerbiageText>
  </div>
);
VerbiageRow.propTypes = {
  children: PropTypes.node.isRequired,
};

const DirectiveText = styled.div`
  font-weight: bolder;
  font-style: italic;
  border-top: black solid 2px;
`;

const DirectiveRow = ({ children }) => (
  <div className="row">
    <DirectiveText className="col-sm-12">{children}</DirectiveText>
  </div>
);
DirectiveRow.propTypes = {
  children: PropTypes.node.isRequired,
};

const VerbiageOutline = () => (
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
    <VerbiageRow>
      Welcome to the <FormikInputField name="ward" style={{ width: 250 }} />{' '}
      Sacrament Meeting. My name is
    </VerbiageRow>
    <div className="row">
      <TextBox className="col-sm-6" fieldName="conducting" />
    </div>
    <VerbiageRow>
      and I am the{' '}
      <FormikInputField name="conductingCalling" style={{ width: 250 }} />.
    </VerbiageRow>
    <div className="row">
      <TextBox className="col-sm-6" fieldName="presiding" />
    </div>
    <VerbiageRow>
      will preside over this meeting and he has asked me to conduct.
    </VerbiageRow>
    <VerbiageRow>We welcome on the stand</VerbiageRow>
    <div className="row">
      <TextBox className="col-sm-12" fieldName="welcome" />
    </div>
    <VerbiageRow>and we excuse</VerbiageRow>
    <div className="row">
      <TextBox className="col-sm-12" fieldName="excuse" />
    </div>
    <VerbiageRow>Our music today will be provided by</VerbiageRow>
    <div className="row">
      <TextBox label="Chorister" className="col-sm-6" fieldName="chorister" />
    </div>
    <div className="row">
      <TextBox label="Organist" className="col-sm-6" fieldName="organist" />
    </div>
    <VerbiageRow>We have the following announcements:</VerbiageRow>
    <Announcements includeLabel={false} />

    <VerbiageRow>We will open this meeting by singing</VerbiageRow>
    <div className="row">
      <HymnInput label="Hymn" className="col-sm-12" fieldName="openingHymn" />
    </div>
    <VerbiageRow>after which the invocation will be given by</VerbiageRow>
    <div className="row">
      <TextBox className="col-sm-12" fieldName="invocation" />
    </div>
    <DirectiveRow>STAND UP #2</DirectiveRow>
    <VerbiageRow>We have some ward business to take care of today.</VerbiageRow>
    <CallingsSection />
    <VerbiageRow>
      Other ward business{' '}
      <StyledSubtext>
        (Ordinations, Advancements, Memberships, Confirmations, Blessings)
      </StyledSubtext>
    </VerbiageRow>
    <WardBusiness includeLabel={false} />
    <VerbiageRow>
      <StyledSubtext>(stake business)</StyledSubtext>We will now turn the time
      over to <FormikInputField name="stakeRep" style={{ width: 250 }} /> for
      some stake business. When he is done, we will move to the Sacrament
      portion of our meeting by singing...
    </VerbiageRow>
    <VerbiageRow>
      <StyledSubtext>(no stake business)</StyledSubtext>
      We will now move to the Sacrament portion of our meeting by singing...
    </VerbiageRow>
    <div className="row">
      <HymnInput label="Hymn" className="col-sm-12" fieldName="sacramentHymn" />
    </div>
    <VerbiageRow>
      after which the sacrament will be administered by the holders of the
      Aaronic Priesthood.
    </VerbiageRow>
    <DirectiveRow>STAND UP #3</DirectiveRow>
    <VerbiageRow>
      We thank the holders of the Aaronic Priesthood for the administration of
      the sacrament.
    </VerbiageRow>
    <VerbiageRow>We will first hear from...</VerbiageRow>
    <ContentItemsSection />
    <VerbiageRow>and we will go to that point.</VerbiageRow>
    <DirectiveRow>STAND UP #4</DirectiveRow>
    <VerbiageRow>
      We appreciate the talks/testimonies and music shared today.
    </VerbiageRow>
    <VerbiageRow>As a final announcement...</VerbiageRow>
    <div className="row">
      <TextArea fieldName="finalAnnouncement" className="col-sm-12" />
    </div>
    <VerbiageRow>We will close this meeting by singing</VerbiageRow>
    <div className="row">
      <HymnInput label="Hymn" className="col-sm-12" fieldName="closingHymn" />
    </div>
    <VerbiageRow>after which the benediction will be given by</VerbiageRow>
    <div className="row">
      <TextBox className="col-sm-12" fieldName="benediction" />
    </div>
  </>
);

export default VerbiageOutline;
