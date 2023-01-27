import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

import RemoveButton from './RemoveButton';

const EnumeratedSection = ({
  sectionItem: SectionItem,
  fieldName,
  addText,
  initialCount = 2,
}) => {
  const { values: formikValues, setFieldValue } = useFormikContext();
  let savedCount;
  if (formikValues[`${fieldName}-count`]) {
    savedCount = +formikValues[`${fieldName}-count`];
  }

  const [itemCount, setItemCount] = useState(savedCount || initialCount);

  const updateItemCount = (delta) => {
    const newValue = itemCount + delta;
    setItemCount(newValue);
    setFieldValue(`${fieldName}-count`, newValue);
    const parentFieldName = `${fieldName}-${itemCount}`;
    Object.keys(formikValues).forEach((field) => {
      if (field.indexOf(parentFieldName) === 0) {
        setFieldValue(field, '');
      }
    });
  };

  const removeButton = <RemoveButton onClick={() => updateItemCount(-1)} />;

  const rows = [];
  for (let i = 0; i < itemCount; i++) {
    rows.push(
      <div className="row" key={i}>
        <SectionItem
          index={i}
          fieldName={`${fieldName}-${i}`}
          removeButton={i !== 0 && i === itemCount - 1 && removeButton}
        />
      </div>
    );
  }

  return (
    <>
      {rows}
      <div className="row no-print">
        <div className="col-sm-12">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => updateItemCount(1)}
          >
            {addText}
          </button>
        </div>
      </div>
    </>
  );
};

EnumeratedSection.propTypes = {
  sectionItem: PropTypes.elementType,
  fieldName: PropTypes.string,
  addText: PropTypes.string,
  initialCount: PropTypes.number,
};

EnumeratedSection.defaultProps = {
  initialCount: 2,
};

export default EnumeratedSection;
