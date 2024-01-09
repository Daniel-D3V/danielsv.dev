import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ThemeProvider } from '@/providers'
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Daniel Silva',
  description: "Hello, i'm are developer full-stack",
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme="system" disableTransitionOnChange enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
