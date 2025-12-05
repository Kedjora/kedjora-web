'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';

// Dark mode only - no toggle needed
interface ThemeContextType {
  theme: 'dark';
  isDark: true;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', isDark: true });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Always set dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', isDark: true }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

