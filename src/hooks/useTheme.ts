import { useState, useEffect } from 'react';
import { getInitialTheme, saveTheme } from '../utils/theme';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    saveTheme(isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};