import '@/css/variables.css'
import '@/css/global.css'
import Providers from './providers'
import { Lora, Nunito } from 'next/font/google'

const lora = Lora({
  subsets: ['cyrillic', 'latin'],
  style: ['normal', 'italic'],
  variable: '--font-lora'
})

const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito'
})

export const metadata = {
  title: 'My Books',
  description: 'The homepage for my books'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lora.variable} ${nunito.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
