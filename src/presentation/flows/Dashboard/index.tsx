import { ItemFooter, Layout } from '~components/index';
import { BaseDrawerProps } from '~routes/types';

import { CardInfo } from './components/CardInfo';
import { Container } from './styles';

export function Dashboard({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout
      title="Dashboard"
      onToggleDrawer={onToggleDrawer}
      renderLeftFooter={
        <ItemFooter
          iconName="filter"
          text="Entradas"
          onPress={() => console.log('Filtro de entradas')}
        />
      }
      renderRightFooter={
        <ItemFooter
          iconName="filter"
          text="Saidas"
          onPress={() => console.log('Filtro de saídas')}
        />
      }
    >
      <Container>
        <CardInfo iconName="arrow-up-circle" typeTitle="input" subTitle="Hoje" value={300} />
        <CardInfo iconName="arrow-down-circle" typeTitle="output" subTitle="Hoje" value={300} />
        <CardInfo iconName="dollar-sign" typeTitle="profit" subTitle="Hoje" value={300} />
        <CardInfo iconName="arrow-up-circle" typeTitle="debit" subTitle="Hoje" value={300} />
      </Container>
    </Layout>
  );
}
