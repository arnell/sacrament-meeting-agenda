import React from 'react';
import styled from 'styled-components';

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

type DropDownProps = {
  onSelect: (value: string) => void;
  options: { id: string; label: string }[];
};

const DropDown = ({ onSelect, options }: DropDownProps) => {
  const menuItemClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: string
  ) => {
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

export default DropDown;
