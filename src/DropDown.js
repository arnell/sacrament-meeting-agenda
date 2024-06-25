import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapperDiv = styled.div`
  margin-right: 5px;
`;

const StyledDropDownButton = styled.button`
  color: #007bff;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const DropDown = ({ onSelect, options }) => {
  const menuItemClick = (e, value) => {
    e.preventDefault();
    onSelect(value);
  };

  const optionItems = options.map((o) => (
    <button
      className="dropdown-item"
      type="button"
      key={o.id}
      onClick={(e) => menuItemClick(e, o.id)}
    >
      {o.label}
    </button>
  ));

  return (
    <StyledWrapperDiv className="dropdown no-print">
      <StyledDropDownButton
        className="dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi-pencil-square" />
      </StyledDropDownButton>

      <div className="dropdown-menu">{optionItems}</div>
    </StyledWrapperDiv>
  );
};

DropDown.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, label: PropTypes.string })
  ),
};

export default DropDown;
