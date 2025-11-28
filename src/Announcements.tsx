import React from 'react';

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

type AnnouncementsProps = {
  includeLabel?: boolean;
};

const Announcements = ({ includeLabel = true }: AnnouncementsProps) => (
  <>
    {includeLabel && (
      <div className="row">
        <div className="col-sm-12">Announcements:</div>
      </div>
    )}
    <EnumeratedSection
      sectionItem={SizedTextArea}
      addText="Add Announcement"
      fieldName="announcement"
    />
  </>
);

export default Announcements;
