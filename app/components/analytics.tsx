'use client';
import { isProduction } from '@/constants';
import Head from 'next/head';
import Script from 'next/script';
// import { GoogleAnalytics } from 'nextjs-google-analytics';

export const Analytics = () => {

  return (
    <>
      <Head>
        {isProduction && (
          <>
            {/* <Script src="../scripts/hotjar.js" strategy="afterInteractive" /> */}
            <Script defer src="https://analytics.us.umami.is/script.js" data-cache="true" data-website-id="398f4887-88ef-47f0-9d7a-3f5423b7c6dc" strategy="afterInteractive"></Script>
          </>
        )}
      </Head>


    </>
  );
};
