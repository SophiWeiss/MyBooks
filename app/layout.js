export const metadata = {
  title: 'My Books',
  description: 'The homepage for my [bookID]'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}