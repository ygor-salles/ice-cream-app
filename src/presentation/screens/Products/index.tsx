import { Button, Text, View } from 'react-native';

import { Layout, SplashScreen, AccordionList } from '~components/index';
import { images } from '~images/index';
import { BaseDrawerProps } from '~routes/types';

export function Products({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout title="Produtos" noScrollView noFooter onToggleDrawer={onToggleDrawer}>
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
                  Reacts declarative UI paradigm and JavaScript. This enables native app development
                  for whole new teams of developers
                </Text>
                <View />
                <Button title="See more..." />
              </>
            ),
          },
        ]}
      />
      <SplashScreen
        variant="carousel"
        cardsList={[
          {
            srcImage: images.provider,
            title: 'Titulo 1',
            description: 'Cadastre novos clientes para ter controle sobre vendas a prazo',
            onNavigate: () => {},
          },
          {
            srcImage: images.iceCreamLogo,
            title: 'Titulo 2',
            description: 'Cadastre novos clientes para ter controle sobre vendas a prazo',
            onNavigate: () => {},
          },
          {
            srcImage: images.sales,
            title: 'Titulo 3',
            description: 'Cadastre novos clientes para ter controle sobre vendas a prazo',
            onNavigate: () => {},
          },
        ]}
        description="Gerencie informações do estoque de produtos e as respectivas combinações dos produtos. Como por exemplo, combinações de açaís"
      />
    </Layout>
  );
}
