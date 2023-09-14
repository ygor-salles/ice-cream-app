import { Layout, SplashScreen } from '~components/index';
import { images } from '~images/index';
import { BaseDrawerProps } from '~routes/types';

export function Products({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout title="Produtos" noScrollView noFooter onToggleDrawer={onToggleDrawer}>
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
