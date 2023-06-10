import './global.css'
import { Lora } from 'next/font/google'
import { Providers } from './providers'

const lora = Lora({ subsets: ['cyrillic', 'latin'] })

export const metadata = {
  title: 'My Books',
  description: 'The homepage for my books'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
