import { createContext, useCallback, useState } from 'react';

import { AppProviderProps, IThemeContextData } from './types';

export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export function AppThemeProvider({ children }: AppProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(
    () => setThemeName(prev => (prev === 'light' ? 'dark' : 'light')),
    [],
  );

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}