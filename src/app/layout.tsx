'use client';

import { useState } from 'react';
import './globals.scss';
import { Inter } from 'next/font/google';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { darkTheme, lightTheme } from '@/theme/theme';
import Header from '@/components/Header';
import Landing from '@/components/Landing';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  const handleSwitchTheme = () => {
    setIsDark((preState) => !preState);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} />
        <CssBaseline />
        <body className={inter.className}>
          <Header onSwitchTheme={handleSwitchTheme} />
          {children}
          <Landing />
        </body>
      </ThemeProvider>
    </html>
  );
}
