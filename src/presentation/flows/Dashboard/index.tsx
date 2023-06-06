import { Layout } from '@components/Layout';

import { BaseDrawerProps } from '@routes/types';

import { Title } from './styles';

export function Dashboard({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout title="Home" noScrollView alignCenter onToggleDrawer={onToggleDrawer}>
      <Title>Dashboard</Title>
    </Layout>
  );
}
