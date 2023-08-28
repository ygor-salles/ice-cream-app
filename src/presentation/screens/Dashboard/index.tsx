import { useState } from 'react';

import { Dialog } from '~components/Dialog';
import { Button, ItemFooter, Layout, TextApp } from '~components/index';
import { buttonThemes } from '~constants/ButtonThemes';
import { useLoadingContext } from '~hooks/useLoadingContext';
import { useToastContext } from '~hooks/useToastContext';
import { BaseDrawerProps } from '~routes/types';
import { ToastEnum } from '~types/index';

import { CardInfo } from './components/CardInfo';
import { FilterDash } from './components/FilterDash';
import { Container } from './styles';

export function Dashboard({ onToggleDrawer }: BaseDrawerProps) {
  const [showModal, setShowModal] = useState(false);

  const { addLoading, removeLoading } = useLoadingContext();

  const { addToast } = useToastContext();

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
        <FilterDash />

        <Button
          onPress={() => addToast('Messagem exibida com sucesso', ToastEnum.success)}
          // onPress={() => addLoading()}
          themeButton={buttonThemes.OUTLINED}
        >
          Teste
        </Button>

        <CardInfo iconName="arrow-up-circle" typeTitle="input" subTitle="Hoje" value={300} />
        <CardInfo iconName="arrow-down-circle" typeTitle="output" subTitle="Hoje" value={300} />
        <CardInfo iconName="dollar-sign" typeTitle="profit" subTitle="Hoje" value={300} />
        <CardInfo iconName="arrow-up-circle" typeTitle="debit" subTitle="Hoje" value={300} />
      </Container>

      <Dialog show={showModal} onClose={() => setShowModal(false)}>
        <TextApp>Olá</TextApp>
      </Dialog>
    </Layout>
  );
}
