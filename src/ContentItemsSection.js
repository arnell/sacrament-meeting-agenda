import React from 'react';

import ContentItem from './ContentItem';
import EnumeratedSection from './EnumeratedSection';

const ContentItemsSection = () => (
  <EnumeratedSection
    sectionItem={ContentItem}
    addText="Add Content Item"
    initialCount={3}
    fieldName="content-item-section"
  />
);

export default ContentItemsSection;
