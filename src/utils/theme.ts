export const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const saveTheme = (isDark: boolean): void => {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', isDark);
};