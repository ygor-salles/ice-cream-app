import { PropsWithChildren, useState } from 'react';

import { CustomAccordion } from './styles';

type AccordionProps = PropsWithChildren<{
  data: Array<{
    title: string;
    content: JSX.Element;
    expanded?: boolean;
    onHeaderPress?: (index: number) => void;
  }>;
  gap?: number;
}>;

export function AccordionList({ data, gap = 0 }: AccordionProps): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHeaderPress = index => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <CustomAccordion
          key={item.title}
          title={item.title}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}
          hasGap={gap > 0}
          mgBottom={index !== data.length - 1 ? gap : 0}
          firstItem={index === 0}
          lastItem={index === data.length - 1}
        >
          {item.content}
        </CustomAccordion>
      ))}
    </>
  );
}
