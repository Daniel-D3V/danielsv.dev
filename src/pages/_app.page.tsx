import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.sass'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Space_Grotesk } from 'next/font/google';
import { ProgressBar } from '@/components/ProgressBar';
import { Analytics } from '@vercel/analytics/react';

const grotesk = Space_Grotesk({ subsets: ['latin'], weight: '400' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${grotesk.style.fontFamily};
          font-style: ${grotesk.style.fontStyle};
          font-weight: ${grotesk.style.fontWeight};
        }
      `}</style>
      <ProgressBar />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)