import { Input, Layout } from '@components/index';

import { STORAGE_KEYS } from '@constants/index';

import { Block } from './styles';

export function Dashboard() {
  return (
    <Layout>
      <Input value={STORAGE_KEYS.TOKEN} />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </Layout>
  );
}
