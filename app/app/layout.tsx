import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import { cookies } from 'next/headers';
import Script from 'next/script';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Home | AI Web Page Analyzer',
  description: `Empower your website analysis with AI's advanced capabilities.Let AI delve into any site, extracting valuable data and performing tasks effortlessly.Unlock powerful insights and optimize your website effortlessly with AI technology.`
};

export const getTheme = async () => {
  const cookieStore = cookies();
  const cookieTheme = cookieStore.get('theme');
  const theme = (cookieTheme?.value || 'system') as "dark" | "light" | "system";
  return theme;
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = await getTheme();

  return (
    <html lang="en">
      <head>
        <Script async defer src="https://analytics.us.umami.is/script.js" data-cache="true" data-website-id="398f4887-88ef-47f0-9d7a-3f5423b7c6dc" strategy='afterInteractive'></Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme={theme} enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
