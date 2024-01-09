import type { Metadata } from 'next'
import '@/styles/globals.sass'
import { ThemeProvider } from '@/providers'
import { Inter, Poppins } from 'next/font/google';
import classNames from 'classnames';

export const metadata: Metadata = {
  title: 'Daniel Silva',
  description: "Hello, i'm are developer full-stack",
}

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter"
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body className={classNames(inter.variable, poppins.variable)}>
        <ThemeProvider attribute='class' defaultTheme="system" disableTransitionOnChange enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
