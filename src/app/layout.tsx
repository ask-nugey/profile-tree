import { Noto_Sans_JP } from 'next/font/google';
import '@/styles/globals.scss'
import Header from '@/app/ui/Header'
import type { Metadata } from 'next'

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: 'プロフィールツリー🌲',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={NotoSansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
