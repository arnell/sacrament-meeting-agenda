import ContentItem from './ContentItem';
import EnumeratedSection from './EnumeratedSection';

const ContentItemsSection = () => (
  <EnumeratedSection
    sectionItem={ContentItem}
    addText="Add Content Item"
    fieldName="content-item-section"
  />
);

export default ContentItemsSection;
