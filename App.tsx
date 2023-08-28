import 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal';

import {
  AuthProvider,
  AppThemeProvider,
  LoadingProvider,
  ToastProvider,
  ToastArrayProvider,
} from '~contexts/index';
import { Routes } from '~routes/index';

export default function App() {
  return (
    <AppThemeProvider>
      <LoadingProvider>
        <ToastArrayProvider>
          <ToastProvider>
            <AuthProvider>
              <PortalProvider>
                <Routes />
              </PortalProvider>
            </AuthProvider>
          </ToastProvider>
        </ToastArrayProvider>
      </LoadingProvider>
    </AppThemeProvider>
  );
}
