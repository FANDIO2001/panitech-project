import type { Metadata } from 'next'
import { TopHeader } from '@/components/TopHeader'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'PaniTech Academy',
  description: 'Plateforme d\'apprentissage en ligne',
  icons: {
    icon: '/logo.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <TopHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
