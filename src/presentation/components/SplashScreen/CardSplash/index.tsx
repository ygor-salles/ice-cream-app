/* eslint-disable @typescript-eslint/no-explicit-any */
import { TouchableOpacity } from 'react-native';

import { Row } from '../../Row';
import { Description, Footer, Icon, Img, SCard, Title } from './styles';

interface CardSplashProps {
  title: string;
  description: string;
  srcImage: string;
  onNavigate: () => void;
}

export function CardSplash({ description, srcImage, title, onNavigate }: CardSplashProps) {
  return (
    <SCard>
      <Img source={srcImage as any} />
      <Footer>
        <Title>{title}</Title>
        <Row gap={20}>
          <Description>{description}</Description>
          <TouchableOpacity onPress={onNavigate}>
            <Icon name="arrow-right" size={28} />
          </TouchableOpacity>
        </Row>
      </Footer>
    </SCard>
  );
}
