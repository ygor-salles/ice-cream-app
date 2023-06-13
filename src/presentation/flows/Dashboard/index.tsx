import { TextApp, Layout } from '@components/index';

import { BaseDrawerProps } from '@routes/types';

export function Dashboard({ onToggleDrawer }: BaseDrawerProps) {
  return (
    <Layout title="Dashboard" noScrollView alignCenter onToggleDrawer={onToggleDrawer}>
      <TextApp>Dashboard</TextApp>
    </Layout>
  );
}
