import './global.css'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['cyrillic', 'latin'] })

export const metadata = {
  title: 'My Books',
  description: 'The homepage for my books'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={'dark'}>
      <body className={lora.className}>{children}</body>
    </html>
  )
}
