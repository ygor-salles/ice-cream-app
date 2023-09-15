import { PropsWithChildren, useState } from 'react';
import { LayoutAnimation } from 'react-native';

import { AccordionItem } from './AccordionItem';

type AccordionProps = PropsWithChildren<{
  data: Array<{
    title: string;
    content: JSX.Element;
    expanded?: boolean;
    onHeaderPress?: (index: number) => void;
  }>;
}>;

export function AccordionList({ data }: AccordionProps): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeaderPress = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </>
  );
}
