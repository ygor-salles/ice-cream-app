import { View } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { Card, Row } from '~components/index';
import { useThemeContext } from '~hooks/useThemeContext';
import { colors } from '~styles/constants';
import { IconName } from '~types/index';
import { formatNumberToCurrency, getTitleCardInfoDash } from '~utils/index';

import { SubTitle, Title, Value } from './styles';

interface CardInfoProps {
  typeTitle: 'input' | 'output' | 'profit' | 'debit';
  subTitle: string;
  value: number;
  iconName: IconName;
}

export function CardInfo({ typeTitle, subTitle, iconName, value }: CardInfoProps) {
  const { themeName } = useThemeContext();

  const { text, color } = getTitleCardInfoDash(typeTitle);

  const themeTextCard =
    typeTitle === 'profit' ? 'dark' : typeTitle === 'debit' ? 'light' : themeName;

  const bgColorCard =
    typeTitle === 'profit' ? colors.GREEN : typeTitle === 'debit' ? colors.YELLOW : null;

  return (
    <Card bgColor={bgColorCard}>
      <Row>
        <View>
          <Title color={color}>{text}</Title>
          <SubTitle themeName={themeTextCard}>{subTitle}</SubTitle>
        </View>
        <Feather name={iconName} size={24} color={color} />
      </Row>
      <Value themeName={themeTextCard}>{formatNumberToCurrency(value)}</Value>
    </Card>
  );
}
