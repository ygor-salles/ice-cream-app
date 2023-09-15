import { ReactNode, useState } from 'react';
import { LayoutAnimation } from 'react-native';

import { FlattenSimpleInterpolation } from 'styled-components';

import { Body, Container, Header, SIcon, Title } from './styles';

interface AccordionProps {
  children: ReactNode;
  title?: string;
  expanded?: boolean;
  renderHeader?: ReactNode;
  headerContainerStyles?: FlattenSimpleInterpolation;
  onHeaderPress?: () => void;
}

export function Accordion({
  children,
  title = '',
  renderHeader,
  expanded,
  headerContainerStyles,
  onHeaderPress,
  ...rest
}: AccordionProps) {
  const [showExpanded, setShowExpanded] = useState(false);

  const onToggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (onHeaderPress) onHeaderPress();
    else setShowExpanded(prev => !prev);
  };

  const show = expanded || showExpanded;

  return (
    <Container {...rest}>
      <Header onPress={onToggleExpanded} customStyles={headerContainerStyles}>
        {renderHeader ?? (
          <>
            <Title>{title}</Title>
            <SIcon name={show ? 'chevron-up' : 'chevron-down'} size={20} />
          </>
        )}
      </Header>
      {show && <Body>{children}</Body>}
    </Container>
  );
}
