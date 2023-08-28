import 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';

import { AuthProvider, AppThemeProvider, LoadingProvider, ToastProvider } from '~contexts/index';
import { Routes } from '~routes/index';

export default function App() {
  return (
    <AppThemeProvider>
      <LoadingProvider>
        <ToastProvider>
          <AuthProvider>
            <PortalProvider>
              <Routes />
            </PortalProvider>
          </AuthProvider>
        </ToastProvider>
      </LoadingProvider>
    </AppThemeProvider>
  );
}
