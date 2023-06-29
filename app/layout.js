import './css/articles.css'
import './css/colors.css'
import './css/global.css'
import { Lora } from 'next/font/google'
import Providers from './providers'

const lora = Lora({
  subsets: ['cyrillic', 'latin'],
  style: ['normal', 'italic']
})

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
