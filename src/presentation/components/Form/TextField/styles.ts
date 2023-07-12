import styled from 'styled-components/native';

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
  gap: 10px;
`;

export const Error = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme.textError};
  margin-top: 4px;
`;
