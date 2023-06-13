import 'react-native-gesture-handler';

import { AppThemeProvider, AuthProvider } from '@contexts/index';

import { Routes } from '@routes/index';

export default function App() {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AppThemeProvider>
  );
}
