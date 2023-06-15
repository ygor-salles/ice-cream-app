import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { Button, Card, TextApp } from '@components/index';

import { colors } from '@styles/constants';

export const Container = styled.View`
  flex: 1;
`;

export const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
`;

export const SCard = styled(Card)`
  width: 80%;
  align-items: center;
  padding: 24px 16px 16px 16px;
`;

export const SText = styled(TextApp)`
  font-weight: 600;
  font-size: 18px;
`;

export const WrapperForm = styled.View`
  margin-top: 36px;
  margin-bottom: 24px;
  width: 100%;
  gap: 16px;
`;

export const SButton = styled(Button)`
  width: 100%;
`;

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  icon: {
    backgroundColor: colors.WHITE,
  },
});
