import { Children, useRef, useState } from 'react';
import { Animated, FlatList, View } from 'react-native';

import { Indicator, Wrapper, WrapperChild } from './styles';

interface CarouselProps<T> {
  data: Array<T>;
  numPadding?: number;
  keyExtractor?: (item: T, index: number) => string;
  renderItem: ({ item, index }: { item: T; index: number }) => JSX.Element;
}

export function Carousel<T>({
  data,
  numPadding,
  keyExtractor,
  renderItem,
  ...rest
}: CarouselProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [itemCurrent, setItemCurrent] = useState(0);

  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setItemCurrent(viewableItems[0].index);
  }).current;

  return (
    <View {...rest}>
      <FlatList
        ref={slideRef}
        data={data}
        horizontal
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={({ item, index }) => (
          <WrapperChild dataLength={data.length} numPadding={numPadding}>
            {renderItem({ item, index })}
          </WrapperChild>
        )}
      />
      <Wrapper>
        {Children.toArray(
          data.map((item, index) => <Indicator isActive={index === itemCurrent} />),
        )}
      </Wrapper>
    </View>
  );
}
