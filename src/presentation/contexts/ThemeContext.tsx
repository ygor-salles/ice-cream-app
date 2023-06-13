import { createContext, useCallback, useState } from 'react';

import { AppThemeProviderProps, IThemeContextData } from './types';

export const ThemeContext = createContext({} as IThemeContextData);

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(
    () => setThemeName(prev => (prev === 'light' ? 'dark' : 'light')),
    [],
  );

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
