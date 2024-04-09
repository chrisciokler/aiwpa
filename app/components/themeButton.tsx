'use client';
import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { setCookie } from 'cookies-next';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  const themeHandler = (theme: "dark" | "light") => {
    setCookie('theme', theme);
    setTheme(theme)
  }

  const toggle = () => themeHandler(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    let tm = theme;
    if (tm === 'system') tm = systemTheme;
    tm !== 'system' && theme === 'system' && themeHandler(tm === 'dark' ? 'dark' : 'light');
  }, [systemTheme]);

  return (
    <Button variant="secondary" size="iconsm" onClick={toggle}>
      <Sun className="h-[1.15rem] w-[1.15rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.15rem] w-[1.15rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
