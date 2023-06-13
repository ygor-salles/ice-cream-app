import 'react-native-gesture-handler';

import { AppThemeProvider } from '@contexts/index';

import { Routes } from '@routes/index';

export default function App() {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
}
