import styled from 'styled-components';

import TextArea from './TextArea';

const ContainerDiv = styled.div`
  display: flex;
`;

const StyledAsDiv = styled.div`
  margin: 0 5px;
`;

const StyledNameTextArea = styled(TextArea)`
  flex: 0.8;
`;

const StyledCallingTextArea = styled(TextArea)`
  flex: 1;
`;

type CallingInputProps = {
  className?: string;
  fieldName: string;
};

const CallingInput = ({ className, fieldName }: CallingInputProps) => (
  <ContainerDiv className={`${className}`}>
    <StyledNameTextArea fieldName={`${fieldName}-name`} />
    <StyledAsDiv>as</StyledAsDiv>
    <StyledCallingTextArea fieldName={`${fieldName}-calling`} />
  </ContainerDiv>
);

export default CallingInput;
