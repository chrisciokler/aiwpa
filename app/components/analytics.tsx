'use client';
import { isProduction } from '@/constants';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export const Analytics = () => {
  return (
    <>
      {isProduction && (
        <>
          <GoogleAnalytics trackPageViews strategy="afterInteractive" />
          {/* <Head>
            <Script src="../scripts/hotjar.js" strategy="afterInteractive" />
          </Head> */}
        </>
      )}
    </>
  );
};
