import { Button, Text, View } from 'react-native';

import { AccordionList, Layout } from '~components/index';
import { BaseDrawerProps } from '~routes/types';

import { Container, CustomAccordion, headerStyles } from './styles';

export function Products({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout title="Produtos" noScrollView noFooter onToggleDrawer={onToggleDrawer}>
      <Container>
        <AccordionList
          data={[
            {
              title: 'Native development',
              content: (
                <Text>
                  React Native lets you create truly native apps and doesnt compromise your users
                  experiences. It provides a core set of platform agnostic native components
                </Text>
              ),
            },
            {
              title: 'Fast refresh',
              content: (
                <Text>
                  See your changes as soon as you save. With the power of JavaScript, React Native
                  lets you iterate at lightning speed.
                </Text>
              ),
            },
            {
              title: 'Cross-platform',
              content: (
                <>
                  <Text>
                    React components wrap existing native code and interact with native APIs via
                    Reacts declarative UI paradigm and JavaScript. This enables native app
                    development for whole new teams of developers
                  </Text>
                  <View />
                  <Button title="See more..." />
                </>
              ),
            },
          ]}
          gap={16}
        />
        <CustomAccordion
          renderHeader={
            <View>
              <Text>Title de fora</Text>
            </View>
          }
          headerContainerStyles={headerStyles}
        >
          <Text>as</Text>
        </CustomAccordion>
      </Container>
    </Layout>
  );
}
