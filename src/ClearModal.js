import React from 'react';
import styled from 'styled-components';
import { Formik, useFormikContext } from 'formik';

import getInitialFields from './getInitialFields';
import FormikInputField from './FormikInputField';

const ModalDiv = styled.div`
  font-weight: normal;
`;

const clearableFields = [
  {
    id: 'clearPresidingConducting',
    label: 'Presiding / Conducting',
    fields: ['presiding', 'conducting'],
    checked: true,
  },
  {
    id: 'clearChoristerOrganist',
    label: 'Chorister / Organist',
    fields: ['chorister', 'organist'],
    checked: true,
  },
  {
    id: 'clearExcuseWelcome',
    label: 'Excuse / Welcome',
    fields: ['excuseWelcome'],
    checked: true,
  },
  {
    id: 'clearAnnouncements',
    label: 'Announcements',
    fields: ['announcement'],
  },
  {
    id: 'clearHymns',
    label: 'Hymns',
    fields: ['openingHymn', 'sacramentHym', 'closingHymn'],
    checked: true,
  },
  {
    id: 'clearInvocationBenediction',
    label: 'Invocation / Benediction',
    fields: ['invocation', 'benediction'],
    checked: true,
  },
  {
    id: 'clearReleasesCallings',
    label: 'Releases / Callings',
    fields: ['release-section', 'calling-section'],
    checked: true,
  },
  {
    id: 'clearWardStakeBusiness',
    label: 'Ward / Stake Business',
    fields: ['ward-business'],
    checked: true,
  },
  {
    id: 'clearContentItems',
    label: 'Speakers / Musical Numbers / etc',
    fields: ['content-item-section'],
    subFields: ['-label'],
    checked: true,
  },
  {
    id: 'clearFinalAnnouncement',
    label: 'Final Announcement',
    fields: ['finalAnnouncement'],
    checked: true,
  },
];

const initialValues = clearableFields.reduce(
  (prev, current) => ({ ...prev, [current.id]: current.checked }),
  {}
);

const ClearModal = () => {
  const agendaForm = useFormikContext();
  const fields = clearableFields.map(({ id, label }) => (
    <div className="form-check" key={id}>
      <FormikInputField
        id={id}
        name={id}
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  ));

  return (
    <Formik initialValues={initialValues}>
      {({ values }) => (
        <ModalDiv
          className="modal fade"
          id="clearSomeModal"
          tabIndex="-1"
          aria-labelledby="clearSomeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="clearSomeModalLabel">
                  Clear Fields
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{fields}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    const newValues = { ...agendaForm.values };
                    const fieldsToNotClear = clearableFields.filter(
                      ({ id }) => !values[id]
                    );
                    const initialFields = getInitialFields();

                    Object.keys(newValues).forEach((key) => {
                      const shouldClear = !fieldsToNotClear.find((d) =>
                        d.fields.find((f) => key.startsWith(f))
                      );
                      if (shouldClear) {
                        if (initialFields[key]) {
                          newValues[key] = initialFields[key];
                        } else {
                          newValues[key] = '';
                        }
                      }
                    });
                    agendaForm.resetForm({
                      values: { ...newValues },
                    });
                  }}
                >
                  Clear Fields
                </button>
              </div>
            </div>
          </div>
        </ModalDiv>
      )}
    </Formik>
  );
};

export default ClearModal;
