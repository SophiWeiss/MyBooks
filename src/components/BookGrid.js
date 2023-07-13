'use client'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useEffect, useState } from 'react'
import BookCard from './BookCard'

export default function BookGrid({ books }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const bookElements = books.map(book => (
    <BookCard
      style={mounted ? { maxWidth: 'unset' } : { alignSelf: 'center' }}
      key={book.id}
      book={book}
    />
  ))

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 800: 2, 1200: 3 }}>
      <Masonry gutter={'20px'}>{bookElements}</Masonry>
    </ResponsiveMasonry>
  )
}
