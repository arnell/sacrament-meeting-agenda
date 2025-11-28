import React from 'react';
import styled from 'styled-components';

import EnumeratedSection from './EnumeratedSection';
import TextArea from './TextArea';

type SizedTextAreaProps = {
  index: number;
  fieldName: string;
  removeButton?: React.ReactElement;
};

const SizedTextArea = ({
  index,
  fieldName,
  removeButton,
}: SizedTextAreaProps) => (
  <div className="col-sm-12">
    <TextArea index={index} fieldName={fieldName} removeButton={removeButton} />
  </div>
);

const StyleWardBusinessItems = styled.span`
  font-weight: normal;
  font-style: italic;
  font-size: smaller;
`;

const WardBusiness = ({ includeLabel = true }: { includeLabel?: boolean }) => (
  <>
    <div className="row">
      {includeLabel && (
        <div className="col-sm-12">
          Ward / Stake Business:{' '}
          <StyleWardBusinessItems>
            (Ordinations, Advancements, Memberships, Confirmations, Blessings)
          </StyleWardBusinessItems>
        </div>
      )}
    </div>
    <EnumeratedSection
      sectionItem={SizedTextArea}
      addText="Add Item"
      fieldName="ward-business"
    />
  </>
);

export default WardBusiness;
