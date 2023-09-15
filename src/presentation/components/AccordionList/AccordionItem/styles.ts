import styled from 'styled-components/native';

export const Body = styled.View`
  padding: 12px;
`;

export const Container = styled.View`
  padding-bottom: 4px;
`;

export const Header = styled.TouchableOpacity`
  padding: 12px;
  background-color: ${({ theme }) => theme.iconGray};
  color: ${({ theme }) => theme.textDisabled};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
`;
