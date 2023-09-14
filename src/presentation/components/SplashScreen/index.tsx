import { FlatList } from 'react-native';

import { Carousel } from '../Carousel';
import { CardSplash } from './CardSplash';
import { Container, Presentation, Separator, WrapperCard } from './styles';

interface SplashScreenProps {
  description?: string;
  cardsList: Array<{
    title: string;
    description: string;
    srcImage: string;
    onNavigate: () => void;
  }>;
  variant: 'carousel' | 'horizontal' | 'vertical';
}

export function SplashScreen({ description, cardsList, variant }: SplashScreenProps) {
  const isHorizontal = variant === 'horizontal';

  if (variant === 'carousel') {
    return (
      <>
        {description ? <Presentation isHorizontal>{description}</Presentation> : null}
        <Carousel
          data={cardsList}
          renderItem={({ item }) => <CardSplash {...item} />}
          keyExtractor={item => `${item.title}`}
          numPadding={16}
        />
      </>
    );
  }

  return (
    <Container isHorizontal={isHorizontal}>
      {description && isHorizontal ? <Presentation isHorizontal>{description}</Presentation> : null}
      <FlatList
        data={cardsList}
        horizontal={isHorizontal}
        renderItem={({ item, index }) => (
          <WrapperCard
            isHorizontal={isHorizontal}
            firstItem={index === 0}
            lastItem={index === cardsList.length - 1}
          >
            <CardSplash {...item} />
          </WrapperCard>
        )}
        ItemSeparatorComponent={() => <Separator isHorizontal={isHorizontal} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.title}`}
        ListHeaderComponent={
          description && !isHorizontal ? <Presentation>{description}</Presentation> : null
        }
      />
    </Container>
  );
}
