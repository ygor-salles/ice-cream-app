import { ReactNode } from 'react';
import { Text } from 'react-native';

import { EnumRoleUser } from '@contexts/types';

import { useAuthContext } from '@hooks/useAuthContext';

interface ProtectedLayoutProps {
  accessUser: EnumRoleUser[];
  children: ReactNode;
}

export function ProtectedLayout({ accessUser, children }: ProtectedLayoutProps) {
  const { role } = useAuthContext();

  const roleFound = accessUser.find(item => item === role);

  if (roleFound || role === EnumRoleUser.SUPER) {
    return <>{children}</>;
  }

  return <Text>Não autorizado</Text>;
}
