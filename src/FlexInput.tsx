import styled from 'styled-components';

import FormikInputField from './FormikInputField';

const FlexInput = styled(FormikInputField)`
  flex: ${(props) => props.flex || 1};
`;

export default FlexInput;
