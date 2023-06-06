import { Layout } from '@components/index';

import { BaseDrawerProps } from '@routes/types';

import { Block } from './styles';

export function Products({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout title="Produtos" onToggleDrawer={onToggleDrawer}>
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </Layout>
  );
}
