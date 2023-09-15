import { PropsWithChildren, useState } from 'react';

import { Accordion } from '../Accordion';

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
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      {data.map((item, index) => (
        <Accordion
          key={item.title}
          title={item.title}
          expanded={expandedIndex === index}
          onHeaderPress={() => handleHeaderPress(index)}
        >
          {item.content}
        </Accordion>
      ))}
    </>
  );
}
