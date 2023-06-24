import 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';

import { AuthProvider, AppThemeProvider } from '~contexts/index';
import { Routes } from '~routes/index';

export default function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <PortalProvider>
          <Routes />
        </PortalProvider>
      </AuthProvider>
    </AppThemeProvider>
  );
}
